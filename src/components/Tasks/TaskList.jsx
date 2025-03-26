import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../../redux/actions';
import Weather from '../Weather/Weather';

function TaskList() {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  // Group tasks by priority
  const highPriorityTasks = tasks.filter(task => task.priority === 'high');
  const mediumPriorityTasks = tasks.filter(task => task.priority === 'medium');
  const lowPriorityTasks = tasks.filter(task => task.priority === 'low');

  const TaskItem = ({ task }) => {
    const priorityColors = {
      high: 'danger',
      medium: 'warning',
      low: 'success'
    };

    return (
      <div className={`card task-card task-${task.priority}`}>
        <div className="card-body">
          <div className="task-header">
            <div className="task-title-section">
              <h5 className={task.completed ? 'completed-task' : ''}>
                {task.title}
              </h5>
              <span className={`badge bg-${priorityColors[task.priority]} priority-badge`}>
                {task.priority} priority
              </span>
              {task.isOutdoor && <span className="badge bg-info outdoor-badge">Outdoor</span>}
            </div>
            <small className="task-date">
              {new Date(task.createdAt).toLocaleDateString()}
            </small>
          </div>
          
          {task.description && <p className="task-description">{task.description}</p>}
          
          {task.isOutdoor && (
            <div className="weather-container">
              <Weather />
            </div>
          )}
          
          <div className="task-actions">
            <button
              className="btn btn-sm btn-outline-primary toggle-btn"
              onClick={() => dispatch(toggleTask(task.id))}
            >
              {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
            </button>
            <button
              className="btn btn-sm btn-outline-danger delete-btn"
              onClick={() => dispatch(deleteTask(task.id))}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <div className="empty-tasks-message alert alert-info">
          No tasks yet. Add a task to get started!
        </div>
      ) : (
        <div className="priority-sections">
          {highPriorityTasks.length > 0 && (
            <div className="priority-section high-priority-section">
              <h5 className="priority-heading high-priority-heading">High Priority</h5>
              <div className="tasks-container">
                {highPriorityTasks.map(task => (
                  <TaskItem key={task.id} task={task} />
                ))}
              </div>
            </div>
          )}
          
          {mediumPriorityTasks.length > 0 && (
            <div className="priority-section medium-priority-section">
              <h5 className="priority-heading medium-priority-heading">Medium Priority</h5>
              <div className="tasks-container">
                {mediumPriorityTasks.map(task => (
                  <TaskItem key={task.id} task={task} />
                ))}
              </div>
            </div>
          )}
          
          {lowPriorityTasks.length > 0 && (
            <div className="priority-section low-priority-section">
              <h5 className="priority-heading low-priority-heading">Low Priority</h5>
              <div className="tasks-container">
                {lowPriorityTasks.map(task => (
                  <TaskItem key={task.id} task={task} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default TaskList;