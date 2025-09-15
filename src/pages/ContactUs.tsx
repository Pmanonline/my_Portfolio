import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  Mail,
  Phone,
  Send,
  MessageCircle,
  User,
  FileText,
  Clock,
} from "lucide-react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertColor } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, any>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] =
    useState<AlertColor>("success");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const showAlertMessage = (message: string, severity: AlertColor) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.message) {
      showAlertMessage("All fields are required", "error");
      return;
    }

    setLoading(true);
    try {
      const templateParams = {
        to_name: "Segun Umoru",
        from_name: formData.fullName,
        message: formData.message,
        reply_to: formData.email,
      };

      const result = await emailjs.send(
        "service_mfruavt",
        "template_cst1uc9",
        templateParams,
        "9Tp4XEvOsWGi69ktz"
      );

      if (result.status === 200) {
        showAlertMessage("Message sent successfully!", "success");
        setFormData({ fullName: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      showAlertMessage("Failed to send message. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative  bg-gray-50 dark:bg-gray-900">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 md:w-12 h-0.5 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full"></div>
            <span className="text-orange-500 dark:text-orange-400 text-xs md:text-sm font-bold tracking-widest uppercase">
              Contact Me
            </span>
            <div className="w-8 md:w-12 h-0.5 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full"></div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-800 via-orange-500 to-blue-500 dark:from-blue-200 dark:via-orange-400 dark:to-blue-300 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's create something amazing together.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800/60 rounded-2xl p-8 md:p-10 border border-gray-200 dark:border-gray-700/50 shadow-lg space-y-6">
          {/* Full Name */}
          <div className="relative group">
            <User className="absolute left-3 top-3 w-5 h-5 text-gray-400 group-focus-within:text-orange-500" />
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full pl-10 pr-4 py-3.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all"
            />
          </div>

          {/* Email */}
          <div className="relative group">
            <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400 group-focus-within:text-orange-500" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full pl-10 pr-4 py-3.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all"
            />
          </div>

          {/* Message */}
          <div className="relative group">
            <MessageCircle className="absolute left-3 top-3 w-5 h-5 text-gray-400 group-focus-within:text-orange-500" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={6}
              required
              className="w-full pl-10 pr-4 py-3.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all resize-y"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-gradient-to-r from-orange-500 to-orange-600 ${
              loading
                ? "opacity-70 cursor-not-allowed"
                : "hover:from-orange-600 hover:to-orange-700 hover:scale-105"
            } text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg flex items-center justify-center space-x-2 transition-all`}>
            {loading ? (
              <>
                <Clock className="w-5 h-5 animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      </div>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </section>
  );
};

export default ContactUs;
