import { motion, AnimatePresence } from "motion/react";
import { X, Shield, FileText, Cookie } from "lucide-react";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms' | 'cookies';
}

export function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
  const getModalContent = () => {
    switch (type) {
      case 'privacy':
        return {
          icon: Shield,
          title: "Chính sách Bảo mật",
          content: (
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-semibold text-slate-light mb-2">Thu thập thông tin</h3>
                <p className="text-sm text-slate-muted">
                  Chúng tôi thu thập thông tin cá nhân (email, tên, SĐT) và dữ liệu kỹ thuật (IP, cookies) để cung cấp dịch vụ tốt nhất.
                </p>
              </div>
              
              <div>
                <h3 className="text-base font-semibold text-slate-light mb-2">Sử dụng thông tin</h3>
                <p className="text-sm text-slate-muted">
                  Thông tin được dùng để cải thiện dịch vụ, liên hệ dự án và gửi cập nhật sản phẩm.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-slate-light mb-2">Bảo mật & Quyền riêng tư</h3>
                <p className="text-sm text-slate-muted">
                  Dữ liệu được mã hóa SSL/TLS, kiểm soát truy cập nghiêm ngặt. Bạn có quyền truy cập, chỉnh sửa và xóa thông tin cá nhân.
                </p>
              </div>

              <div className="bg-gold/10 border border-gold/20 rounded-lg p-3">
                <p className="text-xs text-slate-muted">
                  <strong className="text-slate-light">Liên hệ:</strong> hoangthequang.ninjaai.dev@gmail.com
                </p>
              </div>
            </div>
          )
        };

      case 'terms':
        return {
          icon: FileText,
          title: "Điều khoản Dịch vụ",
          content: (
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-semibold text-slate-light mb-2">Dịch vụ của chúng tôi</h3>
                <p className="text-sm text-slate-muted">
                  Ninja AI cung cấp giải pháp AI cho doanh nghiệp, phát triển CRM/ERP, tư vấn công nghệ và chương trình Ninja AI Lab.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-slate-light mb-2">Quyền và Nghĩa vụ</h3>
                <p className="text-sm text-slate-muted">
                  Bạn có quyền sử dụng dịch vụ và nhận hỗ trợ. Nghĩa vụ bao gồm cung cấp thông tin chính xác, 
                  không sử dụng sai mục đích và thanh toán đúng hạn.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-slate-light mb-2">Trách nhiệm</h3>
                <p className="text-sm text-slate-muted">
                  Ninja AI không chịu trách nhiệm cho thiệt hại gián tiếp từ việc sử dụng dịch vụ. 
                  Tranh chấp được giải quyết theo pháp luật Việt Nam.
                </p>
              </div>
            </div>
          )
        };

      case 'cookies':
        return {
          icon: Cookie,
          title: "Chính sách Cookie",
          content: (
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-semibold text-slate-light mb-2">Cookie là gì?</h3>
                <p className="text-sm text-slate-muted">
                  Cookies là tệp nhỏ lưu trên thiết bị để ghi nhớ thông tin và cải thiện trải nghiệm website.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-slate-light mb-2">Loại Cookie</h3>
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0"></div>
                      <span className="text-sm text-slate-light">Cần thiết:</span>
                    </div>
                    <span className="text-xs text-slate-muted ml-4 sm:ml-0">Bảo mật, phiên làm việc</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple flex-shrink-0"></div>
                      <span className="text-sm text-slate-light">Phân tích:</span>
                    </div>
                    <span className="text-xs text-slate-muted ml-4 sm:ml-0">Google Analytics, hiệu suất</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-cyan flex-shrink-0"></div>
                      <span className="text-sm text-slate-light">Chức năng:</span>
                    </div>
                    <span className="text-xs text-slate-muted ml-4 sm:ml-0">Ghi nhớ tùy chọn</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-slate-light mb-2">Quản lý Cookie</h3>
                <p className="text-sm text-slate-muted mb-2">
                  Bạn có thể tắt cookies qua cài đặt trình duyệt, nhưng có thể ảnh hưởng một số tính năng.
                </p>
              </div>
            </div>
          )
        };

      default:
        return { icon: Shield, title: "", content: null };
    }
  };

  const { icon: Icon, title, content } = getModalContent();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl max-h-[85vh] sm:max-h-[70vh] glass-card-premium rounded-2xl shadow-premium border border-gold/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-glass">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gold/20 flex items-center justify-center">
                  <Icon size={16} className="text-gold sm:w-5 sm:h-5" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-light">{title}</h2>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-muted hover:text-slate-light hover:bg-white/10 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6 overflow-y-auto max-h-[55vh] sm:max-h-[50vh]">
              {content}
            </div>

            {/* Footer */}
            <div className="p-4 sm:p-6 border-t border-glass">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-slate-muted text-center sm:text-left">
                  Cập nhật lần cuối: 24 tháng 3, 2026
                </p>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-4 py-2 bg-gradient-premium text-dark-primary rounded-lg text-sm font-medium hover:scale-105 transition-transform"
                >
                  Đóng
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}