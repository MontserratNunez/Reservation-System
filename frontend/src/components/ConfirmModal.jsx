const ConfirmModal = ({
  open,
  title,
  description,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
}) => {
  if (!open) return null;

  return (
    <>
      <div className="modal-backdrop" onClick={onCancel} />

      <div className="modal">
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="actions">
          <button className="secondary" onClick={onCancel}>
            {cancelText}
          </button>

          <button className="primary" onClick={onConfirm}>
            {confirmText}
          </button>
        </div>
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.35);
          z-index: 1000;
        }

        .modal {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: white;
          border-radius: 10px;
          padding: 20px;
          width: 90%;
          max-width: 420px;
          z-index: 1001;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        h3 {
          margin: 0 0 8px;
          font-size: 16px;
          font-weight: 500;
          color: #111827;
        }

        p {
          margin: 0 0 16px;
          font-size: 14px;
          color: #4b5563;
          line-height: 1.4;
        }

        .actions {
          display: flex;
          justify-content: flex-end;
          gap: 8px;
        }

        button {
          font-size: 13px;
          padding: 6px 12px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
        }

        .secondary {
          background: #f3f4f6;
          color: #374151;
        }

        .secondary:hover {
          background: #e5e7eb;
        }

        .primary {
          background: #1976d2;
          color: white;
        }

        .primary:hover {
          background: #0860b8;
        }
      `}</style>
    </>
  );
};

export default ConfirmModal;