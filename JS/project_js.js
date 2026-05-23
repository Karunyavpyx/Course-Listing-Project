//input_box JS
let search_btn = document.getElementsByClassName('search_btn')[0];
let inputt = document.getElementsByClassName('inputt')[0];

search_btn.addEventListener('click', function() {
    let valuee = inputt.value.trim(); // Get updated value inside the event
    if (valuee.toLowerCase() === "web design") { // Ignore case sensitivity
        window.location.href = "./designpage.html";
    } 
    else if (valuee.toLowerCase() === "graphic design") { // Ignore case sensitivity
        window.location.href = "./graphic_page.html";
    }
    else if (valuee.toLowerCase() === "logo design") { // Ignore case sensitivity
      window.location.href = "./logodesign.html";
  }
    else if (valuee.toLowerCase() === "investment") { // Ignore case sensitivity
        window.location.href = "./investment.html";
    }
    else if (valuee.toLowerCase() === "financial") { // Ignore case sensitivity
        window.location.href = "./financial.html";
    }
    else {
        alert("No matching page found!"); // Debugging
    }
});







//browse topics
let title1=document.getElementsByClassName('title1')[0];
let title2=document.getElementsByClassName('title2')[0];
let title3=document.getElementsByClassName('title3')[0];

let text1 = document.querySelector('.browse-card-p1');
let text2=document.getElementsByClassName('browse-card-p2')[0];
let text3=document.getElementsByClassName('browse-card-p3')[0];

let image1=document.getElementsByClassName('browse-img1')[0];
let image2=document.getElementsByClassName('browse-img2')[0];
let image3=document.getElementsByClassName('browse-img3')[0];

let main_p1=document.getElementsByClassName('browse-p1')[0];
let main_p2=document.getElementsByClassName('browse-p2')[0];
let main_p3=document.getElementsByClassName('browse-p3')[0];
let main_p4=document.getElementsByClassName('browse-p4')[0];
let main_p5=document.getElementsByClassName('browse-p5')[0];


//navigationas



main_p1.addEventListener('click',function one() {
    title1.innerHTML="Web Design";
    text1.innerHTML="Web design courses teach the fundamentals of web design and development. They  UI and UX design, responsive design, and coding."
    image1.setAttribute('src','../Project/Imagess/undraw_Remote_design_team_re_urdx.png');
    // browse_card_div1.classList.toggle('div-1');

    title2.innerHTML="Graphic ";
    text2.innerHTML="A graphic design course is designed to teach students how to create visual representations that effectively convey messages"
    image2.setAttribute('src','../Project/Imagess/undraw_Redesign_feedback_re_jvm0.png');

    title3.innerHTML="Logo design";
    text3.innerHTML="A logo design course teaches the skills needed to create a visual identity for a brand."
    image3.setAttribute('src','../Project/Imagess/colleagues-working-cozy-office-medium-shot.png');
});

main_p2.addEventListener('click',function second() {
    title1.innerHTML="Adversiting";
    text1.innerHTML="An advertising course teaches students how to promote products and services through various media channels."
    image1.setAttribute('src','../Project/Imagess/undraw_online_ad_re_ol62.png');
    // browse_card_div1.classList.toggle('div-4');
    // browse_card_div1.classList.replace('div-1','div-4');

    title2.innerHTML="Video Content ";
    text2.innerHTML="A video content course teaches students how to create video content, including video editing, shooting, and post-production. "
    image2.setAttribute('src','../Project/Imagess/undraw_Group_video_re_btu7.png');

    title3.innerHTML="viral Tweet";
    text3.innerHTML="A viral tweet course is an online educational program that teaches individuals how to craft tweets that have a high chance of going viral on Twitter."
    image3.setAttribute('src','../Project/Imagess/undraw_viral_tweet_gndb.png');


});


main_p3.addEventListener('click',function three() {
    title1.innerHTML="Investment";
    text1.innerHTML="A composing music course teaches students how to create music, and can prepare students for a career as a composer. "
    image1.setAttribute('src','../Project/Imagess/undraw_Finance_re_gnv2.png');
    // image1.style.marginTop="10%"

    title2.innerHTML="Finance";
    text2.innerHTML="A finance course broadly refers to educational programs focusing on the principles, practices, and concepts related to money, investments, banking, financial planning, and related areas.  "
    image2.setAttribute('src','../Project/Imagess/financegirl.png');

    title3.innerHTML="CFA";
    text3.innerHTML="The CFA (Chartered Financial Analyst) course is a globally recognized professional certification program offered by the CFA Institute, aimed at equipping investment. "
    image3.setAttribute('src','../Project/Imagess/CFA.png');
});



main_p4.addEventListener('click',function four() {
    title1.innerHTML="Composing Song";
    text1.innerHTML="A composing music course teaches students how to create music, and can prepare students for a career as a composer. "
    image1.setAttribute('src','../Project/Imagess/undraw_Compose_music_re_wpiw.png');

    title2.innerHTML="Online Music ";
    text2.innerHTML="An online music course is a music learning program that takes place online. Students can learn music theory, songwriting, music production, and more online courses.  "
    image2.setAttribute('src','../Project/Imagess/undraw_happy_music_g6wc.png');

    title3.innerHTML="Podcast";
    text3.innerHTML="A podcast course teaches you how to create, record, edit, distribute, and market podcasts. You can take a podcast course online. "
    image3.setAttribute('src','../Project/Imagess/undraw_Podcast_audience_re_4i5q.png');
});


main_p5.addEventListener('click',function five() {
    title1.innerHTML="Graduation";
    text1.innerHTML="The best course for graduation depends entirely on your individual interests, career goals, and strengths. "
    image1.setAttribute('src','../Project/Imagess/undraw_Graduation_re_gthn.png');
    image1.style.marginTop="10%"

    title2.innerHTML="Educator ";
    text2.innerHTML="Educator courses are designed to equip individuals with the knowledge, skills, and attitudes necessary to become effective educators.  "
    image2.setAttribute('src','../Project/Imagess/undraw_Educator_re_ju47.png');

    title3.innerHTML="Master of Education (M.Ed)";
    text3.innerHTML="An M.Ed course offers in-depth knowledge in specific areas like educational technology, special education, or guidance and counseling. "
    image3.setAttribute('src','../Project/Imagess/undraw_Podcast_audience_re_4i5q.png');
});

//page navigation
let browse_card_div1=document.getElementsByClassName('div-1')[0];
browse_card_div1.addEventListener('click',function(){
  window.location.href="./designpage.html";
  
});

let browse_card_div2=document.getElementsByClassName('div-2')[0];
browse_card_div2.addEventListener('click',function(){
  window.location.href="./graphic_page.html"
});

let browse_card_div3=document.getElementsByClassName('div-3')[0];
browse_card_div3.addEventListener('click',function(){
  window.location.href="./logodesign.html"
});


let finance=document.getElementsByClassName('finance')[0];
finance.addEventListener('click',function(){
  window.location.href="./financial.html"
});
// let browse_card_div4=document.getElementsByClassName('div-4')[0];
// browse_card_div4.addEventListener('click',function(){
//   window.location.href="./index.html"
// });

//FAQ
  let child1=document.querySelector('.child1')
  let first_div=document.querySelector('.first-div');
  let child2=document.querySelector('.child2')
  let second_div=document.querySelector('.second-div');
  let p=document.querySelector('.p1')
  let p2=document.querySelector('.p2')
  let child3=document.querySelector('.child3')
  let third_div=document.querySelector('.third-div');
  let p3=document.querySelector('.p3')
  
  function func1(){
      
      if(child1.classList.contains('child1')){
     
      p.innerHTML="Topic Listing is free Bootstrap 5 CSS template. You are not allowed to redistribute this template on any other template collection website without our permission. Please contact TemplateMo for more detail. Thank you";
      p2.innerHTML=''
      p3.innerHTML=''
      child1.classList.replace('child1','child')
      
    }
    else{
      if(child1.classList.contains('child')){
         
          p.innerHTML=''
          child1.classList.replace('child','child1')
      }
  }
}

function func2(){
      
      if(child2.classList.contains('child2')){
     
      p2.innerHTML="You can search on Google with keywords such as templatemo portfolio, templatemo one-page layouts, photography, digital marketing, etc.";
      p3.innerHTML=''
      p.innerHTML=''

      child2.classList.replace('child2','child')
      
    }
    else{
      if(child2.classList.contains('child')){
         
          p2.innerHTML=''
          child2.classList.replace('child','child2')
      }
  }
}
function func3(){
      
      if(child3.classList.contains('child3')){
     
      p3.innerHTML="You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.";
      p.innerHTML=''
      p2.innerHTML=''
      
      child3.classList.replace('child3','child')
      
    }
    else{
      if(child3.classList.contains('child')){
         
          p3.innerHTML=''
          child3.classList.replace('child','child3')
      }
  }
}