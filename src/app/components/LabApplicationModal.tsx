import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Upload, Send, User, Mail, Phone, Briefcase, FileText, Link as LinkIcon } from "lucide-react";

interface LabApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LabApplicationModal({ isOpen, onClose }: LabApplicationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    portfolio: "",
    experience: "",
    reason: "",
  });
  const [fileName, setFileName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
      setFormData({ name: "", email: "", phone: "", portfolio: "", experience: "", reason: "" });
      setFileName("");
    }, 3000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
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
                      Ứng tuyển Lab
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
                        />
                      </label>
                    </div>

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
                          Đang gửi...
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
