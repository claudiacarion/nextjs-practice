export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/')
  const data = await res.json()

  const paths = data.map(user => {
    return {
      params: { id: user.id.toString() }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await res.json()

  return {
    props: { user: data }
  }
}
  
const Details = ({ user }) => {
  return (
    <div>
      <h1>details</h1>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.website}</p>
    </div>
  )
}

export default Details
