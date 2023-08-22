document.addEventListener('DOMContentLoaded', () => {
  // ... (previous code)

  // Show content input modal for a specific element type
  function showContentModal(elementType) {
      const modal = document.getElementById('content-modal');
      const textInput = document.getElementById('text-input');
      const imageInput = document.getElementById('image-input');
      const videoInput = document.getElementById('video-input');

      if (elementType === 'text') {
          textInput.classList.add('hidden');
          imageInput.classList.add('hidden');
          videoInput.classList.add('hidden');
      } else if (elementType === 'image') {
          textInput.classList.add('hidden');
          imageInput.classList.remove('hidden');
          videoInput.classList.add('hidden');
      } else if (elementType === 'video') {
          textInput.classList.add('hidden');
          imageInput.classList.add('hidden');
          videoInput.classList.remove('hidden');
      }

      modal.classList.remove('hidden');
  }

  // Add Element with User Input
  document.getElementById('addText').addEventListener('click', () => {
      showContentModal('text');
  });

  document.getElementById('addImage').addEventListener('click', () => {
      showContentModal('image');
  });

  document.getElementById('addVideo').addEventListener('click', () => {
      showContentModal('video');
  });

  // Submit Text
  document.getElementById('text-submit').addEventListener('click', () => {
      const textContent = document.getElementById('text-content').value;
      const text = document.createElement('div');
      text.className = 'draggable text';
      text.textContent = textContent;
      canvas.appendChild(text);
      makeDraggable(text);
      closeContentModal();
  });

  // Submit Image
  document.getElementById('image-submit').addEventListener('click', () => {
      const imageUrl = document.getElementById('image-url').value;
      const image = document.createElement('img');
      image.className = 'draggable image';
      image.src = imageUrl;
      canvas.appendChild(image);
      makeDraggable(image);
      closeContentModal();
  });

  // Submit Video
  document.getElementById('video-submit').addEventListener('click', () => {
      const videoUrl = document.getElementById('video-url').value;
      const video = document.createElement('video');
      video.className = 'draggable video';
      video.src = videoUrl;
      video.controls = true;
      canvas.appendChild(video);
      makeDraggable(video);
      closeContentModal();
  });

  // Close Content Modal
  function closeContentModal() {
      const modal = document.getElementById('content-modal');
      modal.classList.add('hidden');
      clearInputFields();
  }

  // Clear Input Fields
  function clearInputFields() {
      document.getElementById('text-content').value = '';
      document.getElementById('image-url').value = '';
      document.getElementById('video-url').value = '';
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');

  // ... (previous code)

  // Submit Image
  document.getElementById('image-submit').addEventListener('click', () => {
      const imageUrl = document.getElementById('image-url').value;
      const image = document.createElement('img');
      image.className = 'draggable image';
      image.src = imageUrl; // Set the source of the image
      image.alt = 'Image'; // Add alt text for accessibility
      image.style.width = '400px'; // Set the width (adjust as needed)
      image.style.height = '220px'; // Maintain aspect ratio
      canvas.appendChild(image);
      makeDraggable(image);
      closeContentModal();
  });

  // Submit Video
  document.getElementById('video-submit').addEventListener('click', () => {
      const videoUrl = document.getElementById('video-url').value;
      const video = document.createElement('video');
      video.className = 'draggable video';
      video.src = videoUrl; // Set the source of the video
      video.controls = true;
      video.style.width = '400px'; // Set the width (adjust as needed)
      video.style.height = '220px'; // Maintain aspect ratio
       
      canvas.appendChild(video);
      makeDraggable(video);
      closeContentModal();
  });

  // ... (other code remains the same)
});
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');

  // ... (previous code)

  // Submit Text
  document.getElementById('text-submit').addEventListener('click', () => {
      const textContent = document.getElementById('text-content').value;
      const text = document.createElement('p'); // Use <p> for text content
      text.className = 'draggable text';
      text.textContent = textContent; // Set the text content
      canvas.appendChild(text);
      makeDraggable(text);
      closeContentModal();
  });

  // ... (existing code for image and video)
});

