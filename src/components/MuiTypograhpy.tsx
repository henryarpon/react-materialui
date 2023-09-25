import { Typography } from '@mui/material'

const MuiTypograhpy = () => {
  return (
    <div>
        <Typography variant='h1'>h1 Heading</Typography>
        <Typography variant='h2'>h2 Heading</Typography>
        <Typography variant='h3'>h3 Heading</Typography>
        <Typography variant='h4' component='h1' gutterBottom>h4 Heading</Typography>
        <Typography variant='h5'>h5 Heading</Typography>
        <Typography variant='h6'>h6 Heading</Typography>

        <Typography variant='body1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga laborum amet non obcaecati, aperiam assumenda sunt! Esse voluptatem ex nihil ea id libero necessitatibus magnam, nam amet, laboriosam, hic autem.
        </Typography>

        <Typography variant='body2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quae id alias molestias aut minima, deleniti tempora sed facere perferendis totam consequuntur corrupti quam porro fugit fugiat eius cum ullam.
        </Typography>
    </div>
  )
}

export default MuiTypograhpy