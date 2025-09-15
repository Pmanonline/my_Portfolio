import React from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  endpoint: string;
  onSuccess: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  title,
  endpoint,
  onSuccess,
}) => {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add API call to `endpoint`
    onSuccess();
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white dark:bg-accent-charcoal rounded-lg shadow-lg p-6 max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4 text-primary-dark dark:text-white">
          {title}
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-4 p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full mb-4 p-2 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-pink-400 hover:bg-pink-500 text-white py-2 px-4 rounded">
            Submit
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-4 text-sm text-gray-600 hover:underline">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default BookingModal;
