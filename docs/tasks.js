module.exports = {
    paths: {
        "/tasks": {
        get: {
            summary: "Obtener todas las tareas",
            tags: ["Tasks"],
            responses: {
            200: {
                description: "Lista de tareas obtenida correctamente",
                content: {
                "application/json": {
                    schema: {
                    type: "array",
                    items: { $ref: "#/components/schemas/Task" },
                    },
                },
                },
            },
            },
        },
        },
        "/tasks/create": {
        post: {
            summary: "Crear una nueva tarea",
            tags: ["Tasks"],
            requestBody: {
            required: true,
            content: {
                "application/json": {
                schema: {
                    type: "object",
                    properties: {
                    title: {
                        type: "string",
                        description: "Título de la tarea",
                    },
                    },
                },
                },
            },
            },
            responses: {
            201: {
                description: "Tarea creada con éxito",
            },
            },
        },
        },
        "/tasks/id/{_id}": {
        put: {
            summary: "Actualizar solo el título de una tarea",
            tags: ["Tasks"],
            parameters: [
            {
                name: "_id",
                in: "path",
                required: true,
                description: "ID de la tarea",
                schema: {
                type: "string",
                },
            },
            ],
            requestBody: {
            required: true,
            content: {
                "application/json": {
                schema: {
                    type: "object",
                    properties: {
                    title: {
                        type: "string",
                        description: "Nuevo título de la tarea",
                    },
                    },
                },
                },
            },
            },
            responses: {
            200: {
                description: "Tarea actualizada correctamente",
            },
            },
        },
        delete: {
            summary: "Eliminar una tarea",
            tags: ["Tasks"],
            parameters: [
            {
                name: "_id",
                in: "path",
                required: true,
                description: "ID de la tarea",
                schema: {
                type: "string",
                },
            },
            ],
            responses: {
            200: {
                description: "Tarea eliminada correctamente",
            },
            },
        },
        },
    },
};