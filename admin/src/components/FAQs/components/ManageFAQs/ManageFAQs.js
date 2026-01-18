import { useState, useCallback, useContext, useMemo } from 'react';
import { FAQContext } from '../../context/FAQContext';
import Button from '../Button/Button';
import FAQForm from '../FAQForm/FAQForm';
import FAQCard from '../FAQCard/FAQCard';
import './ManageFAQs.scss';
import { sectionHeading } from '../../../utils/utils';
import Loader from '../../../utils/Loader';
import { nanoid } from "nanoid";

const ManageFAQs = () => {
  const context = useContext(FAQContext);
  const [activeFilter, setActiveFilter] = useState('all');
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingFAQ, setEditingFAQ] = useState(null);

  const handleFilterChange = useCallback((filter) => {
    setActiveFilter(filter);
  }, []);

  const handleAddClick = useCallback(() => {
    setShowAddForm(prev => !prev);
    setEditingFAQ(null);
  }, []);

  const handleAddSubmit = useCallback(async (formData) => {
    if (!context) return;

    try {
      await context.addFAQ(formData);
      setShowAddForm(false);
    } catch (error) {
      console.error('Error adding FAQ:', error);
    }
  }, [context]);

  const handleEditClick = useCallback((faq) => {
    setEditingFAQ(faq);
    setShowAddForm(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleEditSubmit = useCallback(async (formData) => {
    if (!context || !editingFAQ) return;

    try {
      await context.editFAQ(editingFAQ?.id, formData);
      setEditingFAQ(null);
    } catch (error) {
      console.error('Error updating FAQ:', error);
    }
  }, [context, editingFAQ]);

  const handleUnpublish = useCallback(async (id) => {
    if (!context) return;

    try {
      await context.unpublish(id);
    } catch (error) {
      console.error('Error unpublishing FAQ:', error);
    }
  }, [context]);

  const handleDelete = useCallback(async (id) => {
    if (!context) return;

    try {
      await context.removeFAQ(id);
    } catch (error) {
      console.error('Error deleting FAQ:', error);
    }
  }, [context]);

  const handleCancelForm = useCallback(() => {
    setShowAddForm(false);
    setEditingFAQ(null);
  }, []);

  const filteredFAQs = useMemo(() => {
    if (!context?.faqs) return [];

    if (activeFilter === 'all') {
      return context.faqs;
    }
    return context.faqs.filter(faq => faq?.status === activeFilter);
  }, [context?.faqs, activeFilter]);

  if (!context) {
    return (
      <div className="manage-faqs">
        <div className="manage-faqs__error">
          FAQ context not available. Please ensure FAQProvider is set up correctly.
        </div>
      </div>
    );
  }

  const { loading, error, stats } = context;

  if (loading || error) {
    return <Loader />
  }

  return (
    <div className="manage-faqs">
      <div className="manage-faqs__header">
        {sectionHeading(
          'Manage FAQs',
          `${stats?.published || 0} published · ${stats?.draft || 0} draft · ${stats?.total || 0} total`
        )}
        <div className="manage-faqs__filters">
          <button
            className={`manage-faqs__filter ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => handleFilterChange('all')}
          >
            All
          </button>
          <button
            className={`manage-faqs__filter ${activeFilter === 'published' ? 'active' : ''}`}
            onClick={() => handleFilterChange('published')}
          >
            Published ({stats?.published || 0})
          </button>
          <button
            className={`manage-faqs__filter ${activeFilter === 'draft' ? 'active' : ''}`}
            onClick={() => handleFilterChange('draft')}
          >
            Draft ({stats?.draft || 0})
          </button>
        </div>
      </div>

      {editingFAQ && (
        <FAQForm
          mode="edit"
          initialData={editingFAQ}
          onSubmit={handleEditSubmit}
          onCancel={handleCancelForm}
        />
      )}

      {!editingFAQ && (
        <>
          <div className="manage-faqs__add-section">
            <Button
              variant="primary"
              onClick={handleAddClick}
              fullWidth={false}
              icon={showAddForm ? '−' : '+'}
            >
              Add New FAQ
            </Button>
          </div>

          {showAddForm && (
            <FAQForm
              mode="add"
              onSubmit={handleAddSubmit}
              onCancel={handleCancelForm}
            />
          )}
        </>
      )}

      <div className="manage-faqs__list">
        {filteredFAQs.length === 0 ? (
          <div className="manage-faqs__empty">
            {activeFilter === 'all'
              ? 'No FAQs yet. Create your first one!'
              : `No ${activeFilter} FAQs found.`}
          </div>
        ) : (
          filteredFAQs.map(faq => (
            <FAQCard
              fakeId={nanoid()}
              key={faq?.id}
              faq={faq}
              onEdit={handleEditClick}
              onUnpublish={handleUnpublish}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ManageFAQs;
