const documentation = {
  openapi: "3.0.3",
  servers: [
    {
      url: "http://localhost:4000/api/v1",
    },
  ],
  info: {
    title: "Shopping Cart",
    version: "1.0.0",
  },
  tags: [
    {
      name: "Auth",
      description: "Operations about authentication",
    },
    {
      name: "Categories",
      description: "Operations about Categories",
    },
    {
      name: "Products",
      description: "Operations about Products",
    },
    {
      name: "Customers",
      description: "Operations about Customers",
    },
    {
      name: "Cart",
      description: "Operations about Cart",
    },
    {
      name: "Orders",
      description: "Operations about Orders",
    },
  ],

  paths: {
    "/auth/signup": {
      post: {
        tags: ["Auth"],
        description: "To save the Customers",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Signup",
              },
            },
          },
        },
        responses: {
          200: {
            description: " Successful operation",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/SuccessResponse",
                },
              },
            },
          },
          400: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorResponse",
                },
              },
            },
          },
        },
      },
    },
    "/auth/login": {
      post: {
        tags: ["Auth"],
        description: "login",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Login",
              },
            },
          },
        },
        responses: {
          200: {
            description: " Successful operation",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/SuccessResponse",
                },
              },
            },
          },
          400: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorResponse",
                },
              },
            },
          },
        },
      },
    },
    "/categories": {
      get: {
        tags: ["Categories"],
        description: "To get all the Categories",
        responses: {
          200: {
            description: " Successful operation",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Categories",
                  },
                },
              },
            },
          },
          400: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorResponse",
                },
              },
            },
          },
        },
      },
    },
    "/categories/{categoryId}/products": {
      get: {
        tags: ["Categories"],
        description: "To get the Products by Category id",
        parameters: [
          {
            name: "categoryId",
            in: "path",
            description: "id of a Category",
            required: true,
            schema: {
              type: "string",
              format: "uuid",
            },
          },
        ],
        responses: {
          200: {
            description: " Successful operation",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Products",
                },
              },
            },
          },
          400: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorResponse",
                },
              },
            },
          },
        },
      },
    },
    "/products/{productId}": {
      get: {
        tags: ["Products"],
        description: "To get the Products by Product id",
        parameters: [
          {
            name: "productId",
            in: "path",
            description: "id of a Product",
            required: true,
            schema: {
              type: "string",
              format: "uuid",
            },
          },
        ],
        responses: {
          200: {
            description: " Successful operation",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Product",
                },
              },
            },
          },
          400: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorResponse",
                },
              },
            },
          },
        },
      },
    },
    "/customers/{email}": {
      get: {
        tags: ["Customers"],
        description: "To get the Customer by Email",
        parameters: [
          {
            name: "email",
            in: "path",
            description: "Email of a Customer",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: " Successful operation",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Customer",
                  },
                },
              },
            },
          },
          400: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorResponse",
                },
              },
            },
          },
          401: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorResponse",
                },
              },
            },
          },
        },
      },
      put: {
        tags: ["Customers"],
        description: "To update the Customer details",
        parameters: [
          {
            name: "email",
            in: "path",
            description: "Email of a Customer",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/UpdateCustomer",
              },
            },
          },
        },
        responses: {
          200: {
            description: " Successful operation",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/SuccessResponse",
                },
              },
            },
          },
          400: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorResponse",
                },
              },
            },
          },
          401: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorResponse",
                },
              },
            },
          },
        },
      },
    },
    "/cart": {
      post: {
        tags: ["Cart"],
        description: "To add the products to cart",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Cart",
              },
            },
          },
        },
        responses: {
          200: {
            description: " Successful operation",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/SuccessResponse",
                },
              },
            },
          },
          400: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorResponse",
                },
              },
            },
          },
        },
      },
    },
    "/cart/{customerId}": {
      get: {
        tags: ["Cart"],
        description: "To get the items in the cart of a user",
        parameters: [
          {
            name: "customerId",
            in: "path",
            description: "customerId of a Customer",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: " Successful operation",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/FetchCart",
                },
              },
            },
          },
          400: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorResponse",
                },
              },
            },
          },
        },
      },
    },
    "/cart/cartItem/{cartItemId}": {
      delete: {
        tags: ["Cart"],
        description: "To delete the items in the cart of a user",
        parameters: [
          {
            name: "cartItemId",
            in: "path",
            description: "cartId of a cart",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: " Successful operation",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/SuccessResponse",
                },
              },
            },
          },
          400: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorResponse",
                },
              },
            },
          },
        },
      },
    },
    "/order": {
      post: {
        tags: ["Order"],
        description: "To add the Order details",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Order",
              },
            },
          },
        },
        responses: {
          200: {
            description: " Successful operation",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/SuccessResponse",
                },
              },
            },
          },
          400: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorResponse",
                },
              },
            },
          },
        },
      },
    },
    "/order/{customerId}": {
      get: {
        tags: ["Order"],
        description: "To get the Orders of a user",
        parameters: [
          {
            name: "customerId",
            in: "path",
            description: "customerId of a Customer",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: " Successful operation",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/FetchOrder",
                },
              },
            },
          },
          400: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorResponse",
                },
              },
            },
          },
          400: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorResponse",
                },
              },
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      Signup: {
        type: "object",
        properties: {
          firstName: {
            type: "string",
          },
          lastName: {
            type: "string",
          },
          email: {
            type: "string",
          },
          street: {
            type: "string",
          },
          city: {
            type: "string",
          },
          zip: {
            type: "integer",
          },
          password: {
            type: "string",
          },
        },
      },
      Login: {
        type: "object",
        properties: {
          email: {
            type: "string",
          },
          password: {
            type: "string",
          },
        },
      },
      Categories: {
        type: "object",
        properties: {
          categoryId: {
            type: "string",
            example: "550e8400-e29b-41d4-a716-446655440000",
          },
          categoryName: {
            type: "string",
          },
          description: {
            type: "string",
          },
          image: {
            type: "string",
          },
        },
      },
      Products: {
        type: "object",
        properties: {
          category: {
            type: "object",
            properties: {
              categoryId: {
                type: "string",
                example: "550e8400-e29b-41d4-a716-446655440000",
              },
              categoryName: {
                type: "string",
              },
              description: {
                type: "string",
              },
              image: {
                type: "string",
              },
            },
          },
          products: {
            type: "array",
            items: {
              $ref: "#/components/schemas/Product",
            },
          },
        },
      },
      Product: {
        type: "object",
        properties: {
          productId: {
            type: "string",
            example: "550e8400-e29b-41d4-a716-446655440000",
          },
          productName: {
            type: "string",
          },
          productDetails: {
            type: "string",
          },
          price: {
            type: "number",
            format: "double",
          },
          quantity: {
            type: "integer",
          },
          image: {
            type: "string",
          },
        },
      },
      Customer: {
        type: "object",
        properties: {
          firstName: {
            type: "string",
          },
          lastName: {
            type: "string",
          },
          email: {
            type: "string",
          },
          street: {
            type: "string",
          },
          city: {
            type: "string",
          },
          zip: {
            type: "integer",
          },
        },
      },
      UpdateCustomer: {
        type: "object",
        properties: {
          firstName: {
            type: "string",
          },
          lastName: {
            type: "string",
          },
          street: {
            type: "string",
          },
          city: {
            type: "string",
          },
          zip: {
            type: "integer",
          },
        },
      },
      Cart: {
        type: "object",
        properties: {
          customerId: {
            type: "string",
          },
          productId: {
            type: "string",
          },
          quantity: {
            type: "integer",
          },
        },
      },
      FetchCart: {
        type: "object",
        properties: {
          cartId: {
            type: "string",
          },
          totalAmount: {
            type: "number",
          },
          products: {
            type: "array",
            items: {
              $ref: "#/components/schemas/CartItem",
            },
          },
        },
      },
      CartItem: {
        type: "object",
        properties: {
          productId: {
            type: "string",
            example: "550e8400-e29b-41d4-a716-446655440000",
          },
          CartItemId: {
            type: "string",
            example: "550e8400-e29b-41d4-a716-446655440000",
          },
          productName: {
            type: "string",
          },
          price: {
            type: "number",
            format: "double",
          },
          quantity: {
            type: "double",
          },
          image: {
            type: "string",
          },
        },
      },
      Order: {
        type: "object",
        properties: {
          customer_id: {
            type: "string",
          },
          cart_id: {
            type: "string",
          },
        },
      },
      FetchOrder: {
        type: "object",
        properties: {
          orderId: {
            type: "string",
          },
          totalAmount: {
            type: "number",
            format: "double",
          },
          arrivalDate: {
            type: "string",
          },
          createdAt: {
            type: "string",
          },
          isdelivered: {
            type : "boolean",
            description: "if value 0 the order delivered, otherwise no"
          },
          products: {
            type: "array",
            items: {
              $ref: "#/components/schemas/OrderItem",
            },
          },
        },
      },
      OrderItem: {
        type: "object",
        properties: {
          productId: {
            type: "string",
            example: "550e8400-e29b-41d4-a716-446655440000",
          },
          OrderItemId: {
            type: "string",
            example: "550e8400-e29b-41d4-a716-446655440000",
          },
          productName: {
            type: "string",
          },
          price: {
            type: "number",
            format: "double",
          },
          quantity: {
            type: "integer",
          },
          image: {
            type: "integer",
          },
        },
      },
      SuccessResponse: {
        type: "object",
        properties: {
          message: {
            type: "string",
          },
          statusCode: {
            type: "string",
          },
        },
      },
      ErrorResponse: {
        type: "object",
        properties: {
          message: {
            type: "string",
          },
          statusCode: {
            type: "string",
          },
        },
      },
    },
  },
};

module.exports = documentation;
