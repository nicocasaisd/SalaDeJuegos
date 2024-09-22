import { Component, OnInit } from '@angular/core';
import { ChatMessage, ChatService } from '../../services/chat.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit{
  messages: ChatMessage[] = [];
  newMessage: string = '';
  sender: string = 'Ninguno';

  constructor(private chatService : ChatService, private auth : AuthService){}
  
  ngOnInit(): void {
    // Inicializo sender
    this.sender = this.auth.getLoggedUser();
    const temp = this.chatService.getMessages();
    console.log('Temp: ', temp);
    // Llamo al chat service
    temp.subscribe( (messages) => {
      this.messages = messages;
      console.log('Messages: ', messages);
    })
  }

  // Ver
  sendMessage(): void {
    if (this.newMessage.trim()) {
      this.chatService.sendMessage(this.newMessage, this.sender).then(() => {
        this.newMessage = ''; // Clear input after sending
      });
    }
  }
}
