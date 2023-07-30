import Image from 'next/image'

export default function Home() {
  return (

<html>
<head>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
   <style>
      .translate-image {
         transition: transform 0.7s ease-in-out;
      }
      .translate-image:hover {
         transform: translateX(30px);
      }
      #icon {
         transition: transform 0.7s ease-in-out;
      }
      #icon:hover {
         transform: translateX(20px);
      }        
   </style>
</head>
<body>
   <h2>Translating image and icon using CSS Transitions</h2>
   <p> Hover over the below image or icon to see the transition </p>
   <!-- Translating image on hover using CSS transitions -->
   <img src="https://www.tutorialspoint.com/static/images/logo.png?v2" class="translate-image">
   <br>
   <!-- Translating icon on hover using CSS transitions -->
   <i class="fa fa-html5" id="icon" style="color: green; font-size: 50px;" />
   </body>
</html>