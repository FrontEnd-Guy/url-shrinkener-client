/**
 * Notification Component: Displays a notification message.
 */

import React from 'react';

import './Notification.scss';

const Notification = ({ message, type }) => {
  return <div className={`notification ${type}`}>{message}</div>;
};

export default Notification;
