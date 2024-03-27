import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servers',
  templateUrl: 'servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit{
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Enter a Server name';
  serverCreated = false;
  servers = ['Testserver', 'Testserver2'];


  constructor (){
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(){}

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);

  }

  onUpdateServerName(event: any){
    // this.serverName = event.target.value;
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
