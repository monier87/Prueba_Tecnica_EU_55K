import { type User} from '../types.d'

interface Props {
    users: User[]
}

export function UsersLists ({ users }: Props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Foto</th>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                    <th>Pais</th>
                    <th>Acciones</th>
                </tr>
            </thead>

            <tbody>
                {
                    users.map(user => {
                        return (
                            <tr key={user.id.value}>
                                <td>
                                    <img src={user.picture.thumbnail} />
                                </td>
                                <td>
                                    {user.name.first}
                                </td>
                                <td>
                                   {user.name.last}
                                </td>
                                <td>
                                    {user.location.country}
                                </td>
                                <td>
                                     <button>Borrar</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}