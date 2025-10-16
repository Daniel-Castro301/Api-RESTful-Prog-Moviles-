# Api-RESTful-Prog-Moviles-

# PRUEBAS

docker-compose down -v
docker system prune -af
docker-compose up --build

http://localhost:3000/api/users

    [
  {
    "nombre": "Daniel Castro",
    "correo": "daniel.castro@ejemplo.com",
    "contraseña": "123456",
    "rol": "admin"
  },
  {
    "nombre": "María Gómez",
    "correo": "maria.gomez@ejemplo.com",
    "contraseña": "654321",
    "rol": "cliente"
  },
  {
    "nombre": "Juan Pérez",
    "correo": "juan.perez@ejemplo.com",
    "contraseña": "789123",
    "rol": "cliente"
  },
  {
    "nombre": "Carolina López",
    "correo": "carolina.lopez@ejemplo.com",
    "contraseña": "abc123",
    "rol": "cliente"
  }
]

http://localhost:3000/api/products

    [
  {
    "nombre": "Curso de Flutter Avanzado",
    "descripcion": "Desarrollo profesional de apps móviles multiplataforma usando Flutter y Dart.",
    "precio": 130000,
    "stock": 25
  },
  {
    "nombre": "Curso de React Native",
    "descripcion": "Construcción de aplicaciones móviles con React Native y Expo.",
    "precio": 115000,
    "stock": 18
  },
  {
    "nombre": "Curso de Node.js + Express",
    "descripcion": "Backend robusto y seguro con Node.js, Express y Sequelize.",
    "precio": 95000,
    "stock": 30
  },
  {
    "nombre": "Curso de Diseño UX/UI",
    "descripcion": "Diseño de interfaces modernas y accesibles con Figma y principios UX.",
    "precio": 100000,
    "stock": 15
  },
  {
    "nombre": "Curso de APIs REST con JavaScript",
    "descripcion": "Construcción y consumo de APIs REST con JavaScript moderno.",
    "precio": 110000,
    "stock": 20
  }
]

http://localhost:3000/api/facturas

    [
  {
    "fecha": "2025-10-16T10:30:00Z",
    "total": 245000
  },
  {
    "fecha": "2025-10-15T09:00:00Z",
    "total": 115000
  },
  {
    "fecha": "2025-10-10T14:45:00Z",
    "total": 130000
  },
  {
    "fecha": "2025-10-08T17:20:00Z",
    "total": 95000
  }
]

http://localhost:3000/api/classes

    [
  {
    "nombre": "Programación en JavaScript",
    "descripcion": "Fundamentos, estructuras de control y funciones modernas ES6.",
    "precio": 60000
  },
  {
    "nombre": "Desarrollo Backend con Node.js",
    "descripcion": "Creación de servidores API REST con Express y manejo de rutas.",
    "precio": 95000
  },
  {
    "nombre": "Bases de Datos con Sequelize",
    "descripcion": "ORM para modelar relaciones y consultas con Node.js.",
    "precio": 80000
  },
  {
    "nombre": "Diseño Frontend con React",
    "descripcion": "Componentes funcionales, hooks y consumo de APIs REST.",
    "precio": 120000
  },
  {
    "nombre": "Aplicaciones Full Stack",
    "descripcion": "Integración completa entre frontend y backend usando Node.js y React.",
    "precio": 150000
  }
]
