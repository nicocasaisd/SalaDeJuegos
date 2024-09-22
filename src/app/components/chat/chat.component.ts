import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChatMessage, ChatService } from '../../services/chat.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit{
  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;
  //messages: ChatMessage[] = [];
  messages!: Observable<ChatMessage[]>;
  newMessage: string = '';
  sender: string = 'Ninguno';

  constructor(private chatService : ChatService, private auth : AuthService){}
  
  ngOnInit(): void {
    // Inicializo sender
    this.sender = this.auth.getLoggedUser();
    //const temp = this.chatService.getMessages();
    this.messages = this.chatService.getMessages();
    //console.log('Temp: ', temp);
    // Llamo al chat service
    this.messages.subscribe( () => {
      //this.messages = messages;
      //console.log('Messages: ', messages);
      setTimeout(()=>this.scrollToBottom(), 100);
      
    })
  }

  // Ver
  sendMessage(): void {
    if (this.newMessage.trim()) {
      this.chatService.sendMessage(this.newMessage, this.sender).then(() => {
        
      });
    }
    this.newMessage = ''; // Limpiamos el input
  }

  ngAfterViewChecked() {
    //setTimeout(()=>this.scrollToBottom(), 100);
    
  }

  private scrollToBottom(): void {
    const container = this.messagesContainer.nativeElement;
    container.scrollTop = container.scrollHeight;
  }
}
