import { useCallback } from "react";
import Badge from "../Badge/Badge";
import Button from "../Button/Button";
import { CircleCheck, Pencil, Trash } from "lucide-react";
import "./FAQCard.scss";

const FAQCard = ({ faq, onEdit, onUnpublish, onDelete, fakeId }) => {
  const handleEdit = useCallback(() => {
    onEdit(faq);
  }, [faq, onEdit]);

  const handleUnpublish = useCallback(() => {
    onUnpublish(faq.id);
  }, [faq, onUnpublish]);

  const handleDelete = useCallback(() => {
    if (
      window.confirm(
        "Are you sure you want to delete this FAQ? This action cannot be undone.",
      )
    ) {
      onDelete(faq.id);
    }
  }, [faq, onDelete]);

  if (!faq) {
    return null;
  }

  return (
    <div className="faq-card" key={fakeId}>
      <div className="faq-card__header">
        <div className="faq-card__badges">
          <Badge variant="category">{faq.category}</Badge>
          <Badge variant={faq.status === "published" ? "published" : "draft"}>
            {faq.status === "published" ? "Published" : "Draft"}
          </Badge>
        </div>
        <span className="faq-card__date">{faq.date}</span>
      </div>

      <h3 className="faq-card__question">{faq.question}</h3>
      <p className="faq-card__answer">{faq.answer}</p>

      <div className="faq-card__actions">
        <Button variant="edit" onClick={handleEdit} icon={<Pencil />}>
          Edit
        </Button>
        {faq.status === "published" && (
          <Button variant="unpublish" onClick={handleUnpublish} icon="🚫">
            Unpublish
          </Button>
        )}

        {faq.status !== "published" && (
          <Button
            variant="unpublish"
            onClick={handleUnpublish}
            icon={<CircleCheck />}
          >
            Publish
          </Button>
        )}

        <Button variant="delete" onClick={handleDelete} icon={<Trash />}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default FAQCard;
