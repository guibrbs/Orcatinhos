
import { FC} from 'react';
import "../../styles/ListContacts.css"


interface Contact {
    name: string;
    number: number;
    email: string;
}

const Contact: FC<Contact> = ({name, number, email}) => {
    return (
        <tr >
                <th>{name}</th>
                <th>{number}</th>
                <th>{email}</th>
                <th>ed</th>
                <th>-</th>
        </tr>
    );

}

export default Contact;

