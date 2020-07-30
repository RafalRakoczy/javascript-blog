'use strict';

/************************ remove class 'active' from all article links *********************************/

const titleClickHandler = function (event) {
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');
  console.log(event);

  const activeLinks = document.querySelectorAll('.titles a.active');

  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }

  /*********************** add class 'active' to the clicked link **********************************/

  clickedElement.classList.add('active');
  console.log('clickedElement', clickedElement);

  /********************** remove class 'active' from all articles ************************************/

  const activeArticles = document.querySelectorAll('.posts article.active');

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }

  /******************* get 'href' attribute from the clicked link *********************************/

  const articleSelector = clickedElement.getAttribute('href');
  console.log('Attribute of the selected link ' + articleSelector);


  /***************** find the correct article using the selector (value of 'href' attribute) **********/

  const targetActicle = document.querySelector(articleSelector);
  console.log(targetActicle);


  /*********************** add class 'active' to the correct article ********************/

  targetActicle.classList.add('active');
}

/* Module 6.4 */

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';


/********************* remove contents of titleList *******************/

const titleLinks = function generateTitleLinks() {

  const titleList = document.querySelector(optTitleListSelector);
  console.log(optTitleListSelector);
  titleList.innerHTML = '';
  console.log(titleList);

  /************************* for each article ******************************/

  const articles = document.querySelectorAll(optArticleSelector);

  for (let article of articles) {

    /************************** get the article id *******************************/
    const articleId = article.getAttribute('Id')


    /************************** find the title element ***************************/

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /***************** get the title from the title element *********************/



    /******************** create HTML of the link ******************************/

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log('created link', linkHTML);

    /******************* insert link into titleList ******************************/

    titleList.insertAdjacentHTML("beforeend", linkHTML);

    /********************* insert link into html variable *************************/
  }

}
titleLinks();

const links = document.querySelectorAll('.titles a');

for (let link of links) {
  link.addEventListener('click', titleClickHandler);
}
