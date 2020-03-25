'use strict';

module.exports = (sequelize, Sequelize) => {
    const Project = sequelize.define('Project', {
        uuid: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING(64),
            allowNull: false,
        },
        communication: {
            type: Sequelize.STRING(64),
        },
        type: {
            type: Sequelize.STRING(64),
        },
        withdrawalOfFunds: {
            type: Sequelize.STRING(64),
        },
        owner: {
            type: Sequelize.STRING(64),
        },
        startDate: {
            type: Sequelize.STRING(64),
        },
        endDate: {
            type: Sequelize.STRING(64),
        },
        description: {
            type: Sequelize.STRING(64),
        },
        history: {
            type: Sequelize.STRING(5000),
        },
        source: {
            type: Sequelize.STRING(64),
        },
        // currentMilestoneUuid: {
        //     field: 'current_milestone_id',
        //     type: Sequelize.UUID,
        // },
        createdAt: {
            type: Sequelize.DATE,
            field: 'created_at',
        },
        updatedAt: {
            type: Sequelize.DATE,
            field: 'updated_at',
        },
    }, {
        tableName: 'projects',
        timestamps: true,
    });
    Project.associate = (models) => {
        Project.hasMany(models.ProjectSkills, {foreignKey: 'skillUuid', as: 'projects_skills'});
        Project.hasMany(models.Task, {foreignKey: 'project_uuid', as: 'tasks'});
        // Project.hasMany(models.UsersProject, {foreignKey: 'projectUuid', as: 'projects'});
    };
    // Project.associate = (models) => {
    //     Project.hasMany(models.Milestone, {foreignKey: 'uuid', as: 'milestones'});
    // };

    return Project;
};
