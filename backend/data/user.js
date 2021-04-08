import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@examplex.com',
    password: bcrypt.hashSync('admin',10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'admin@examplex.com',
    password: bcrypt.hashSync('admin',10),
  },
  {
    name: 'John Does',
    email: 'admin@examplex.com',
    password: bcrypt.hashSync('admin',10),
  },
  {
    name: 'John Dos',
    email: 'admin@examplex.com',
    password: bcrypt.hashSync('admin',10),
  },
];


export default users;