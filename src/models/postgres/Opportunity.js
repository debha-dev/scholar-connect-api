import { DataTypes } from 'sequelize';
import { pgClient } from '../../config/db.js';

function generateRandomId() {
  return Math.floor(1000000000 + Math.random() * 9000000000); // 10-digit number
}

export const Opportunity = pgClient.define('Opportunity', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    defaultValue: generateRandomId
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
  },
  deadline: {
    type: DataTypes.DATE,
    allowNull: false
  },
  link: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      field: "created_at",
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      field: "updated_at",
    },
}, {
  tableName: 'opportunities',
  timestamps: true,
  underscored: true,
});
