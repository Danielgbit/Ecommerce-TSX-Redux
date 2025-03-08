import styles from './Dashboard.module.css'

const Dashboard = () => {
  return (
    <div>
        <div>
            <h1>Dashboard</h1>
            <button>Logout</button>
        </div>
        <form>
            <div>
                <label htmlFor="amiiboSeries">amiiboSeries</label>
                <input type="text" />
            </div>
        </form>
    </div>
  )
}

export default Dashboard