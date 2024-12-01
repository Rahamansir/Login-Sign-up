import Fields, { fieldprops } from './Fields';

const field: fieldprops[] = [
  { label: 'User Name', placeholder: 'plz provide User Name' },
  { label: 'Password', placeholder: 'plz provide Password', type: 'password' },
];
export default function Login() {
  return (
    <div>
      <h2>Login</h2>
      <div className="Login">
        {field.map(function (field) {
          return (
            <Fields
              label={field.label}
              placeholder={field.placeholder}
              type={field.type}
            />
          );
        })}
      </div>
      <button>Submit</button>
    </div>
  );
}
