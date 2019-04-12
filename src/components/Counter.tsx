import { Component, Vue } from "vue-property-decorator";

@Component
export default class CounterView extends Vue {
  get counter() {
    return this.portal.counter;
  }

  render(){
    return (
      <div class="counter">
        <button onClick={()=> this.counter.calculate(1)}>+</button>
        <span>{this.counter.count}</span>
        <button onClick={()=> this.counter.calculate(-1)}>-</button>
      </div>
    )
  }
}