import Fields, { Fieldprops } from './Fields';

  export const field: Fieldprops[] = [
  { label: 'First Name', placeholder: 'plz provide First Name' },
  { label: 'Last Name', placeholder: 'plz provide Last Name' },
  { label: 'User Name', placeholder: 'plz provide User Name' },
  { label: 'Email Name', placeholder: 'plz provide Email', type: 'Email' },
  { label: 'Password', placeholder: 'plz provide Password', type: 'password' },
];

export default function Register() {
  return (
    <div>
      <h3>Register</h3>
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
