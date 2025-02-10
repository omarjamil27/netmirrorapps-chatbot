/* NetMirror Bot - Chat Widget */
document.addEventListener("DOMContentLoaded", function () {
    // 1. Create Chat Container
    const chatContainer = document.createElement("div");
    chatContainer.innerHTML = `
        <div id="netmirror-chat" 
            style="position: fixed !important;
                   bottom: 25px !important;
                   right: 25px !important;
                   z-index: 2147483647 !important;
                   display: block !important;">
            <div id="chat-header" style="padding: 12px; background: #1E293B; border-radius: 12px 12px 0 0; display: flex; align-items: center; gap: 8px; color: white;">
                <img src="https://netmirrorapps.com/logo.png" width="28">
                NetMirror Assistant
                <button id="close-chat" style="margin-left: auto; background: none; border: none; color: white; cursor: pointer;">×</button>
            </div>
            <div id="messages-container" style="height: 300px; overflow-y: auto; padding: 12px;">
                <div class="welcome-msg" style="color: #94A3B8; margin-bottom: 12px;">🎬 Stream <strong>Pushpa 2</strong> Now!</div>
                <div id="messages"></div>
            </div>
            <div id="input-area" style="padding: 12px; display: flex; gap: 8px; border-top: 1px solid #1E293B;">
                <input type="text" id="user-input" 
                    placeholder="Ask about Netflix mirror..."
                    style="flex-grow: 1; padding: 8px; border: 1px solid #4F46E5; border-radius: 8px; background: #0F172A; color: white;">
                <button id="send-btn" style="padding: 8px 16px; background: #4F46E5; border: none; border-radius: 8px; color: white; cursor: pointer;">📤</button>
            </div>
            <div id="chat-footer" style="padding: 10px; text-align: center; font-size: 12px; background: #1E293B; color: white;">
                🔗 Visit <a href="https://netmirrorapps.com" target="_blank" style="color: #4F46E5; text-decoration: none;">NetMirrorApps.com</a> for the best streaming apps!
            </div>
        </div>
    `;
    document.body.appendChild(chatContainer);

    // 2. Add Styling
    const style = document.createElement("style");
    style.innerHTML = `
        #netmirror-chat {
            width: 350px !important;
            background: #0F172A !important;
            border: 2px solid #4F46E5 !important;
            border-radius: 16px !important;
            box-shadow: 0 8px 32px rgba(79, 70, 229, 0.5) !important;
        }
        #messages-container::-webkit-scrollbar {
            width: 6px;
        }
        #messages-container::-webkit-scrollbar-thumb {
            background: #4F46E5;
            border-radius: 3px;
        }
    `;
    document.head.appendChild(style);

    // 3. Chat Functionality
    const messagesDiv = document.getElementById('messages');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const closeBtn = document.getElementById('close-chat');
    const netmirrorChat = document.getElementById('netmirror-chat');

    // Function to add messages
    function addMessage(message, isUser = false) {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messageElement.style.padding = '8px';
        messageElement.style.marginBottom = '8px';
        messageElement.style.borderRadius = '8px';
        messageElement.style.background = isUser ? '#4F46E5' : '#1E293B';
        messageElement.style.color = 'white';
        messagesDiv.appendChild(messageElement);
    }

    // Handle user messages
    function handleUserMessage() {
        const message = userInput.value.trim();
        if (!message) return;

        addMessage(message, true);
        userInput.value = '';

        // Simulate bot response with backlink
        setTimeout(() => {
            addMessage(`For streaming ${message}, check out our site: https://netmirrorapps.com 🎥`);
        }, 800);
    }

    // Close chat functionality
    closeBtn.addEventListener('click', () => {
        netmirrorChat.style.display = 'none';
    });

    // Floating button to reopen chat
    const reopenButton = document.createElement('button');
    reopenButton.innerHTML = '💬';
    reopenButton.style = `
        position: fixed !important;
        bottom: 25px !important;
        right: 25px !important;
        z-index: 2147483647 !important;
        background: #4F46E5 !important;
        color: white !important;
        border: none !important;
        border-radius: 50% !important;
        width: 50px !important;
        height: 50px !important;
        cursor: pointer !important;
        box-shadow: 0 4px 16px rgba(79, 70, 229, 0.5) !important;
    `;
    reopenButton.addEventListener('click', () => {
        netmirrorChat.style.display = 'block';
    });
    document.body.appendChild(reopenButton);

    // Event listeners for sending messages
    sendBtn.addEventListener('click', handleUserMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleUserMessage();
    });
});
