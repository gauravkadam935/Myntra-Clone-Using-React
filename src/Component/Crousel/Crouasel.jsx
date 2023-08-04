
// //   const cards = [
// //     "https://res.cloudinary.com/admitad-gmbh/image/upload/v1645271701/ayhkmrmh9qjwmhnptmrn.jpg",
// //     "https://res.cloudinary.com/admitad-gmbh/image/upload/v1658763280/mvalluly8yzveu8a4mb6.jpg",
// //     "https://img.paisawapas.com/ovz3vew9pw/2021/08/06091522/Ajio-Offer-Today.jpg",
// //     "https://www.bigtricks.in/wp-content/uploads/2021/07/Screenshot_80-1.jpg",
// //     "https://cdn.flipshope.com/blog/wp-content/uploads/2023/05/Myntra-upcoming-sale.jpg",
// //     "https://cdn.zoutons.com/images/originals/blog/1681212819099.jpg_1681212819.png",
// //     "https://www.topfdeals.com/wp-content/uploads/2022/06/Myntra-India-reviews.jpg",
// //     "https://sslimages.shoppersstop.com/sys-master/root/h3f/hb7/30346449158174/Allen-Solly-web_060723.jpg",
// //   ]
//   import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import MobileStepper from '@mui/material/MobileStepper';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const images = [
//   {
//     imgPath:
//     "https://res.cloudinary.com/admitad-gmbh/image/upload/v1645271701/ayhkmrmh9qjwmhnptmrn.jpg",  
// },
//   {
//     imgPath:
//     "https://res.cloudinary.com/admitad-gmbh/image/upload/v1658763280/mvalluly8yzveu8a4mb6.jpg",
//   },
//   {
//     imgPath:
//     "https://cdn.flipshope.com/blog/wp-content/uploads/2023/05/Myntra-upcoming-sale.jpg",
    
//   },
//   {
//     imgPath:
//     "https://www.topfdeals.com/wp-content/uploads/2022/06/Myntra-India-reviews.jpg",
//   },
// ];

// function SwipeableTextMobileStepper() {
//   const theme = useTheme();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const maxSteps = images.length;

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleStepChange = (step) => {
//     setActiveStep(step);
//   };

//   return (
//     <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
//       <Paper
//         square
//         elevation={0}
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           height: 50,
//           pl: 2,
//           bgcolor: 'background.default',
//         }}
//       >
//         {/* <Typography>{images[activeStep].label}</Typography> */}
//       </Paper>
//       <AutoPlaySwipeableViews
//         axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//         index={activeStep}
//         onChangeIndex={handleStepChange}
//         enableMouseEvents
//       >
//         {images.map((step, index) => (
//           <div key={step.label}>
//             {Math.abs(activeStep - index) <= 2 ? (
//               <Box
//                 component="img"
//                 sx={{
//                   height: 255,
//                   display: 'block',
//                   maxWidth: 400,
//                   overflow: 'hidden',
//                   width: '100%',
//                 }}
//                 src={step.imgPath}
//                 alt="img"
//               />
//             ) : null}
//           </div>
//         ))}
//       </AutoPlaySwipeableViews>
//       <MobileStepper
//         steps={maxSteps}
//         position="static"
//         activeStep={activeStep}
//         nextButton={
//           <Button
//             size="small"
//             onClick={handleNext}
//             disabled={activeStep === maxSteps - 1}
//           >
//             Next
//             {theme.direction === 'rtl' ? (
//               <KeyboardArrowLeft />
//             ) : (
//               <KeyboardArrowRight />
//             )}
//           </Button>
//         }
//         backButton={
//           <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
//             {theme.direction === 'rtl' ? (
//               <KeyboardArrowRight />
//             ) : (
//               <KeyboardArrowLeft />
//             )}
//             Back
//           </Button>
//         }
//       />
//     </Box>
//   );
// }

// export default SwipeableTextMobileStepper;