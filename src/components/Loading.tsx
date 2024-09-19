import CircularProgress from '@mui/joy/CircularProgress';

export default function Loading() {

    return (
        <div className="w-full py-8 flex justify-center items-center">
            <CircularProgress 
                variant="plain" 
                size="md"
                value={50}
                sx={{
                    '--CircularProgress-progressColor': '#FA4B9C !important',
                }} 
            />
        </div>
    )
}