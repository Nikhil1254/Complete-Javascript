// DOM tree traversal #####################################
/**
 * # By default white-space property normal set aste, because of that browser neglect white spaces , we can set it o pre , so je text nodes ahet for white spaces tyancha pn effect padnar
 */
// const rootNode = document.getRootNode();
// const htmlEle = rootNode.childNodes[0];
// const headEle = htmlEle.childNodes[0];
// const textEle = htmlEle.childNodes[1];
// const bodyEle = htmlEle.childNodes[2];

// console.dir(textEle);
// console.log(bodyEle)
// console.log(htmlEle.childNodes);

// console.log(bodyEle.parentNode);
// console.log(bodyEle.previousSibling);
// console.log(bodyEle.querySelectorAll('heading'))
// console.log(rootNode.childNodes);

// practice ###################
/**
 * 1.) set paarent of h1 background color
 * 2.) we can use querySelector on any element , ani fakt tyach subtree madhe ti goshta search honar
 * 3.) childNodes gives all child nodes of particular node
 * 4.) children will neglect white-spaces nodes(text nodes \n or spaces)
 */
// let h1Ele = document.getElementsByTagName('h1')[0];
// let divEle = h1Ele.parentNode;
// let body = divEle.parentNode;
// divEle.style.backgroundColor = "#333";
// divEle.style.color = "white";
// divEle.style.padding = '1rem';
// body.style.backgroundColor = "pink";

// body = document.body; // we can get body like this as well
// let head = document.head;
// console.log(head);


