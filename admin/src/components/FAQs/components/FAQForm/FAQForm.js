import { useState, useEffect, useCallback } from 'react';
import Button from '../Button/Button';
import { categories } from '../../api/api.js';
import './FAQForm.scss';

const MAX_ANSWER_LENGTH = 500;

const FAQForm = ({ initialData = null, onSubmit, onCancel, mode = 'add' }) => {
  const [formData, setFormData] = useState({
    category: initialData?.category || 'General',
    question: initialData?.question || '',
    answer: initialData?.answer || ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData({
        category: initialData.category || 'General',
        question: initialData.question || '',
        answer: initialData.answer || ''
      });
    }
  }, [initialData]);

  const handleChange = useCallback((field, value) => {
    if (field === 'answer' && value.length > MAX_ANSWER_LENGTH) {
      return;
    }
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    if (!formData.question.trim() || !formData.answer.trim()) {
      return;
    }

    setIsSubmitting(true);
    try {
      await onSubmit(formData);
      if (mode === 'add') {
        setFormData({
          category: 'General',
          question: '',
          answer: ''
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, onSubmit, mode]);

  const handleCancel = useCallback(() => {
    if (mode === 'add') {
      setFormData({
        category: 'General',
        question: '',
        answer: ''
      });
    }
    onCancel();
  }, [onCancel, mode]);

  const isFormValid = formData.question.trim() && formData.answer.trim();

  return (
    <form className="faq-form" onSubmit={handleSubmit}>
      <div className="faq-form__header">
        <span className="faq-form__icon">{mode === 'edit' ? '✏️' : '➕'}</span>
        <h3 className="faq-form__title">
          {mode === 'edit' ? 'Edit FAQ' : 'Add New FAQ'}
        </h3>
      </div>

      <div className="faq-form__field">
        <label className="faq-form__label">Category</label>
        <select
          className="faq-form__select"
          value={formData.category}
          onChange={(e) => handleChange('category', e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="faq-form__field">
        <label className="faq-form__label">Question</label>
        <input
          type="text"
          className="faq-form__input"
          placeholder="Enter the question..."
          value={formData.question}
          onChange={(e) => handleChange('question', e.target.value)}
        />
      </div>

      <div className="faq-form__field">
        <label className="faq-form__label">Answer</label>
        <textarea
          className="faq-form__textarea"
          placeholder="Enter the answer..."
          rows="5"
          value={formData.answer}
          onChange={(e) => handleChange('answer', e.target.value)}
        />
        <div className="faq-form__counter">
          {formData.answer.length}/{MAX_ANSWER_LENGTH} characters
        </div>
      </div>

      <div className="faq-form__actions">
        <Button
          type="submit"
          variant="primary"
          disabled={!isFormValid || isSubmitting}
          icon="💾"
        >
          {mode === 'edit' ? 'Update FAQ' : 'Save FAQ'}
        </Button>
        <Button
          type="button"
          variant="secondary"
          onClick={handleCancel}
          disabled={isSubmitting}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default FAQForm;
