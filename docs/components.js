module.exports = {
    components: {
        schemas: {
        Task: {
            type: "object",
            properties: {
            _id: {
                type: "string",
                description: "ID autogenerado por MongoDB",
            },
            title: {
                type: "string",
                description: "Título de la tarea",
            },
            completed: {
                type: "boolean",
                description: "Indica si la tarea está completada",
            },
            createdAt: {
                type: "string",
                format: "date-time",
                description: "Fecha de creación",
            },
            updatedAt: {
                type: "string",
                format: "date-time",
                description: "Fecha de actualización",
            },
            },
        },
        },
    },
};