

import "../../styles/ListContacts.css"
import Contact from './Contacts';

export function ListContacs () {
    return(
        <div className="adrift-text">
            <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th>E-mail</th>
                </tr>

            </thead>
            <Contact name='Raquel' number={31} email='raquel@gmail.com'/>
            <Contact name='Costa' number={57} email='costa@gmail.com'/>


        </table>
            
        </div>
    )
}

