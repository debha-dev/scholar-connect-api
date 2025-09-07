import { DataTypes } from 'sequelize';
import { mysqlDB } from '../../config/db.js';

function generateRandomId() {
  return Math.floor(1000000000 + Math.random() * 9000000000); // 10-digit number
}

export const User = mysqlDB.define('User', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    defaultValue: generateRandomId
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM("student", "admin", "recruiter"),
    defaultValue: "student",
  },
  isVerified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  profilePicture: {
    type: DataTypes.STRING,
    allowNull: true, // URL or path to file
  },
  bio: {
    type: DataTypes.TEXT,
    allowNull: true,
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
  tableName: 'users',
  timestamps: true,
  underscored: true,
});

