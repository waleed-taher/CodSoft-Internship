// Get all the navigation items
const navigationItems = document.querySelectorAll('.navigation li a');

// Loop through each navigation item
navigationItems.forEach(item => {
  // Add a click event listener to each navigation item
  item.addEventListener('click', () => {
    // Remove the "active" class from all navigation items
    navigationItems.forEach(navItem => {
      navItem.classList.remove('active');
    });

    // Add the "active" class to the clicked navigation item
    item.classList.add('active');
  });
});

const file = '../public/CV.pdf'
const handleDownload = (url) => {
  const fileName = url.split("/").pop();
  const aTag = document.createElement("a");
  aTag.href = url;
  aTag.setAttribute("download", fileName);
  document.body.appendChild(aTag);
  aTag.click();
  aTag.remove();
};

const download = document.getElementById('download')
download.addEventListener('click', () => {
  handleDownload(file)
})

