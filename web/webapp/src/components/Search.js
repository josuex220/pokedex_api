import styles from '../public/styles/Search.module.css'
const Search = ({setSearch, search}) => {
    const onKeySearch = ( event ) => {
        setSearch(event.target.value);
    }

    return (
        <div className={styles.searchDiv}>
            <input className={styles.input} onKeyUp={onKeySearch} placeholder='Buscar por Pokemon' />
        </div>
    )
}
export default Search;