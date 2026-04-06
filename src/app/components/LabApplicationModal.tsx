import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Upload, Send, User, Mail, Phone, Briefcase, FileText, Link as LinkIcon } from "lucide-react";
import { supabase, getSupabaseConfigIssue } from "../utils/supabase";

interface LabApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LabApplicationModal({ isOpen, onClose }: LabApplicationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "AI Engineer",
    portfolio: "",
    experience: "",
    reason: "",
  });
  const [fileName, setFileName] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const toReadableSupabaseError = (error: unknown, context: "upload" | "insert", bucket?: string, table?: string) => {
    const getRawMessage = () => {
      if (error instanceof Error) {
        return error.message;
      }

      if (typeof error === "string") {
        return error;
      }

      if (typeof error === "object" && error !== null) {
        const maybeMessage = "message" in error ? String((error as { message?: unknown }).message || "") : "";
        const maybeError = "error" in error ? String((error as { error?: unknown }).error || "") : "";
        const maybeStatus = "statusCode" in error ? String((error as { statusCode?: unknown }).statusCode || "") : "";

        return [maybeStatus, maybeMessage || maybeError].filter(Boolean).join(" - ");
      }

      return "";
    };

    const rawMessage = getRawMessage();
    const raw = rawMessage.toLowerCase();

    if (context === "insert") {
      if (raw.includes("relation") && raw.includes("does not exist")) {
        return `Bang ${table || "lab_applications"} chua ton tai trong Supabase Database.`;
      }

      if (raw.includes("row-level security") || raw.includes("permission") || raw.includes("403")) {
        return `Bang ${table || "lab_applications"} chua co policy cho phep INSERT.`;
      }

      if (raw.includes("column") && raw.includes("does not exist")) {
        return `Cau truc bang ${table || "lab_applications"} chua khop voi du lieu form.`;
      }
    }

    if (raw.includes("bucket not found") || raw.includes("not found") || raw.includes("404")) {
      return `Bucket ${bucket || "lab-applications"} chua ton tai tren Supabase Storage.`;
    }

    if (raw.includes("row-level security") || raw.includes("not allowed") || raw.includes("unauthorized") || raw.includes("permission") || raw.includes("403")) {
      return `Bucket ${bucket || "lab-applications"} chua co policy cho phep upload (INSERT).`;
    }

    if (raw.includes("invalid api key") || raw.includes("jwt") || raw.includes("apikey") || raw.includes("401")) {
      return "Supabase key khong hop le. Vui long kiem tra VITE_SUPABASE_ANON_KEY.";
    }

    if (raw.includes("failed to fetch") || raw.includes("network") || raw.includes("cors")) {
      return "Khong ket noi duoc Supabase. Vui long kiem tra mang va VITE_SUPABASE_URL.";
    }

    if (raw.includes("invalid key")) {
      return "Ten file chua ky tu khong hop le voi Supabase Storage. He thong se tu dong dung ban khong dau.";
    }

    if (rawMessage) {
      return `Upload that bai: ${rawMessage}`;
    }

    return "Upload that bai. Vui long thu lai.";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (!resumeFile) {
      setSubmitError("Vui long tai CV truoc khi gui.");
      return;
    }

    const configIssue = getSupabaseConfigIssue();
    if (configIssue || !supabase) {
      setSubmitError(configIssue || "Supabase chua duoc cau hinh.");
      return;
    }

    setIsSubmitting(true);

    try {
      const bucket = import.meta.env.VITE_SUPABASE_LAB_BUCKET || "lab-applications";
      const table = import.meta.env.VITE_SUPABASE_LAB_TABLE || "lab_applications";
      const cleanPart = (value: string, fallback: string) => {
        const normalized = (value || fallback)
          .trim()
          .replace(/\s+/g, " ")
          .replace(/[\\/:*?"<>|]/g, "")
          .trim();

        return normalized || fallback;
      };

      const displayName = cleanPart(formData.name, "Ung vien");
      const displayPosition = cleanPart(formData.position, "Vi tri");
      const toAsciiKey = (value: string) =>
        value
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/đ/g, "d")
          .replace(/Đ/g, "D")
          .replace(/[^a-zA-Z0-9 ._-]/g, "")
          .replace(/\s+/g, " ")
          .trim();
      const fileExt = resumeFile.name.split(".").pop() || "pdf";
      const baseFileName = `${displayName} - ${displayPosition}`;
      const asciiBaseFileName = toAsciiKey(baseFileName) || "Ung vien - Vi tri";
      let filePath = `applications/${baseFileName}.${fileExt}`;

      let { error } = await supabase.storage.from(bucket).upload(filePath, resumeFile, {
        upsert: false,
        contentType: resumeFile.type || undefined,
      });

      if (error) {
        const raw = (error.message || "").toLowerCase();
        const isInvalidKey = raw.includes("invalid key") || raw.includes("400");
        const isDuplicate = raw.includes("already exists") || raw.includes("duplicate") || raw.includes("409");

        if (isInvalidKey) {
          filePath = `applications/${asciiBaseFileName}.${fileExt}`;
          const retryInvalidKey = await supabase.storage.from(bucket).upload(filePath, resumeFile, {
            upsert: false,
            contentType: resumeFile.type || undefined,
          });
          error = retryInvalidKey.error;
        }

        if (error) {
          const retryRaw = (error.message || "").toLowerCase();
          const retryDuplicate = isDuplicate || retryRaw.includes("already exists") || retryRaw.includes("duplicate") || retryRaw.includes("409");

          if (retryDuplicate) {
            const fallbackBase = filePath.includes(`/${asciiBaseFileName}.`) ? asciiBaseFileName : baseFileName;
            filePath = `applications/${fallbackBase} - ${Date.now()}.${fileExt}`;
            const retryDuplicateUpload = await supabase.storage.from(bucket).upload(filePath, resumeFile, {
              upsert: false,
              contentType: resumeFile.type || undefined,
            });
            error = retryDuplicateUpload.error;
          }
        }
      }

      if (error) {
        throw error;
      }

      const { error: insertError } = await supabase.from(table).insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        position: formData.position,
        portfolio: formData.portfolio || null,
        experience: formData.experience,
        reason: formData.reason,
        resume_file_name: filePath.split("/").pop() || resumeFile.name,
        resume_file_path: filePath,
        resume_bucket: bucket,
      });

      if (insertError) {
        await supabase.storage.from(bucket).remove([filePath]);
        throw insertError;
      }

      setIsSuccess(true);

      // Reset after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        setFormData({
          name: "",
          email: "",
          phone: "",
          position: "AI Engineer",
          portfolio: "",
          experience: "",
          reason: "",
        });
        setFileName("");
        setResumeFile(null);
      }, 3000);
    } catch (error) {
      const bucket = import.meta.env.VITE_SUPABASE_LAB_BUCKET || "lab-applications";
      const table = import.meta.env.VITE_SUPABASE_LAB_TABLE || "lab_applications";
      console.error("Supabase upload error:", error);
      const dbMessage = toReadableSupabaseError(error, "insert", bucket, table);
      const uploadMessage = toReadableSupabaseError(error, "upload", bucket, table);
      const finalMessage = dbMessage.startsWith("Upload that bai") ? uploadMessage : dbMessage;
      setSubmitError(finalMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setSubmitError("File vuot qua 10MB. Vui long chon file nho hon.");
        setResumeFile(null);
        setFileName("");
        return;
      }

      setSubmitError("");
      setResumeFile(file);
      setFileName(file.name);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(10,14,39,0.9)", backdropFilter: "blur(8px)" }}
          >
            {/* Modal */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl p-8"
              style={{
                background: "linear-gradient(135deg, rgba(26,31,58,0.98), rgba(26,31,58,0.95))",
                border: "2px solid rgba(202,138,4,0.3)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 100px rgba(202,138,4,0.2)",
              }}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <X size={20} style={{ color: "#E2E8F0" }} />
              </button>

              {!isSuccess ? (
                <>
                  {/* Header */}
                  <div className="mb-8">
                    <div
                      className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
                      style={{
                        background: "rgba(202,138,4,0.2)",
                        border: "1px solid rgba(202,138,4,0.3)",
                        color: "#FCD34D",
                      }}
                    >
                      Ninja AI Lab
                    </div>
                    <h2
                      className="text-4xl font-bold mb-3"
                      style={{
                        background: "linear-gradient(135deg, #CA8A04, #FCD34D)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Ứng tuyển ninja AI
                    </h2>
                    <p className="text-base" style={{ color: "#94A3B8" }}>
                      Tham gia môi trường thực thi thực tế, xây dựng hệ thống AI cùng các experts
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#E2E8F0" }}>
                        <User size={16} className="inline mr-2" />
                        Họ và tên *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-300 focus:ring-2"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          color: "#E2E8F0",
                        }}
                        placeholder="Nguyễn Văn A"
                      />
                    </div>

                    {/* Email & Phone */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: "#E2E8F0" }}>
                          <Mail size={16} className="inline mr-2" />
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-300"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            color: "#E2E8F0",
                          }}
                          placeholder="email@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: "#E2E8F0" }}>
                          <Phone size={16} className="inline mr-2" />
                          Số điện thoại *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-300"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            color: "#E2E8F0",
                          }}
                          placeholder="0912345678"
                        />
                      </div>
                    </div>

                    {/* Position */}
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#E2E8F0" }}>
                        <Briefcase size={16} className="inline mr-2" />
                        Vị trí ứng tuyển *
                      </label>
                      <select
                        required
                        value={formData.position}
                        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-300"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          color: "#E2E8F0",
                        }}
                      >
                        <option value="AI Engineer" style={{ color: "#0F172A" }}>AI Engineer</option>
                        <option value="AI Developer" style={{ color: "#0F172A" }}>AI Developer</option>
                        <option value="ML Engineer" style={{ color: "#0F172A" }}>ML Engineer</option>
                        <option value="Data Engineer" style={{ color: "#0F172A" }}>Data Engineer</option>
                        <option value="Fullstack Engineer" style={{ color: "#0F172A" }}>Fullstack Engineer</option>
                        <option value="Backend Engineer" style={{ color: "#0F172A" }}>Backend Engineer</option>
                      </select>
                    </div>

                    {/* Portfolio/LinkedIn */}
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#E2E8F0" }}>
                        <LinkIcon size={16} className="inline mr-2" />
                        LinkedIn / Portfolio
                      </label>
                      <input
                        type="url"
                        value={formData.portfolio}
                        onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-300"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          color: "#E2E8F0",
                        }}
                        placeholder="https://linkedin.com/in/..."
                      />
                    </div>

                    {/* Experience */}
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#E2E8F0" }}>
                        <Briefcase size={16} className="inline mr-2" />
                        Kinh nghiệm liên quan *
                      </label>
                      <textarea
                        required
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-300 resize-none"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          color: "#E2E8F0",
                        }}
                        placeholder="Mô tả ngắn gọn kinh nghiệm của bạn..."
                      />
                    </div>

                    {/* Reason */}
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#E2E8F0" }}>
                        <FileText size={16} className="inline mr-2" />
                        Tại sao bạn muốn tham gia Lab? *
                      </label>
                      <textarea
                        required
                        value={formData.reason}
                        onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-300 resize-none"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          color: "#E2E8F0",
                        }}
                        placeholder="Chia sẻ động lực và mục tiêu của bạn..."
                      />
                    </div>

                    {/* File Upload */}
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#E2E8F0" }}>
                        <Upload size={16} className="inline mr-2" />
                        CV / Resume
                      </label>
                      <label
                        className="flex items-center justify-center gap-3 px-4 py-4 rounded-xl cursor-pointer transition-all duration-300 hover:scale-[1.02]"
                        style={{
                          background: "rgba(139,92,246,0.1)",
                          border: "2px dashed rgba(139,92,246,0.3)",
                        }}
                      >
                        <Upload size={20} style={{ color: "#A78BFA" }} />
                        <span style={{ color: "#A78BFA" }}>
                          {fileName || "Chọn file PDF hoặc DOCX"}
                        </span>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="hidden"
                          required
                        />
                      </label>
                    </div>

                    {submitError && (
                      <p className="text-sm" style={{ color: "#FCA5A5" }}>
                        {submitError}
                      </p>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                      style={{
                        background: "linear-gradient(135deg, #CA8A04, #F59E0B)",
                        color: "#0A0E27",
                        boxShadow: "0 10px 40px rgba(202,138,4,0.3)",
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                          Dang tai CV len...
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          Gửi đơn ứng tuyển
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                /* Success State */
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, #10B981, #059669)",
                      boxShadow: "0 20px 60px rgba(16,185,129,0.4)",
                    }}
                  >
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h3 className="text-3xl font-bold mb-4" style={{ color: "#E2E8F0" }}>
                    Đã nhận đơn ứng tuyển!
                  </h3>
                  <p className="text-lg" style={{ color: "#94A3B8" }}>
                    Chúng tôi sẽ liên hệ với bạn trong vòng 3-5 ngày làm việc.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
