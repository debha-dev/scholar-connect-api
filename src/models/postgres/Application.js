import { DataTypes } from "sequelize";
import { pgClient } from "../../config/db.js";
import { Opportunity } from "./Opportunity.js";

export const Application = pgClient.define("Application", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  opportunityId: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("applied", "pending", "accepted", "rejected"),
    defaultValue: "pending",
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
  tableName: "applications",
  timestamps: true,
  underscored: true,
});

// Relations inside Postgres
Opportunity.hasMany(Application, { foreignKey: "opportunityId" });
Application.belongsTo(Opportunity, { foreignKey: "opportunityId" });
