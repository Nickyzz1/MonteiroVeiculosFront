import { useWindowSize } from '@/hooks/window';
import SearchIcon from '@mui/icons-material/Search';
import { Button, IconButton } from '@mui/material';

const Search = () => {
    const { width, height } = useWindowSize();
    return (
        <>
            <div className='w-full flex gap-4'>
                <div className="bg-white items-center self-center p-2 flex gap-3 w-full text-black rounded shadow outline-none transition-all duration-300 focus-within:shadow-blue-300 focus-within:ring-2 focus-within:ring-blue-400 focus-within:ring-offset-0">
                    <div className="self-start">
                        <SearchIcon color='primary' />
                    </div>
                    <input
                        className="outline-none text-black w-full border-none bg-transparent placeholder:text-gray-400"
                        type="text"
                        placeholder="Digite o modelo do veículo"
                    />
                </div>
                {width && width > 500 ? (
                <Button className="w-40 h-10" variant="contained">
                    <p className='text-white'>ver ofertas</p>
                </Button>
                ) : null}
            </div>
        </>
    )
}

export default Search;