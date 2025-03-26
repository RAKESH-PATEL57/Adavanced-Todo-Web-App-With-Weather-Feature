import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/actions';

function TaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');
  const [isOutdoor, setIsOutdoor] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim()) return;
    
    dispatch(addTask({
      title,
      description,
      priority,
      isOutdoor
    }));
    
    // Clear form
    setTitle('');
    setDescription('');
    setPriority('medium');
    setIsOutdoor(false);
  };

  return (
    <div className="card">
      <div className="card-header">Add New Task</div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Task Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
              className="form-control"
              id="description"
              rows="2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          
          <div className="mb-3">
            <label htmlFor="priority" className="form-label">Priority</label>
            <select
              className="form-select"
              id="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
          
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="isOutdoor"
              checked={isOutdoor}
              onChange={(e) => setIsOutdoor(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="isOutdoor">
              This is an outdoor activity
            </label>
          </div>
          
          <button type="submit" className="btn btn-primary">Add Task</button>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;