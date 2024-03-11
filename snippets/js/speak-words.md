# 朗读文字

```javascript
function speak(sentence) {
  const utterance = new SpeechSynthesisUtterance(sentence);
  window.speechSynthesis.speak(utterance);
}
// test
speak("hello world");
```
