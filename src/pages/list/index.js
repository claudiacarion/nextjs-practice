import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  return {
    props: { users: data }
  }
}

const List = ({ users }) => {
  return (
    <div>
      <h1>list</h1>
      {users.map(user => (
        <Link key={user.id} href={`/list/${user.id}`}>
          <h3>{user.name}</h3>
          </Link>
      ))}
    </div>
  )
}

export default List
