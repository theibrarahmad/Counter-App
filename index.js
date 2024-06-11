function Counter() {
    this.value = document.getElementById('value');
    this.decreaseBtn = document.querySelector('.decrease');
    this.resetBtn = document.querySelector('.reset');
    this.increaseBtn = document.querySelector('.increase');
    
    this.count = 0;
    
    this.decreaseBtn.addEventListener('click', this.decrease.bind(this));
    this.resetBtn.addEventListener('click', this.reset.bind(this));
    this.increaseBtn.addEventListener('click', this.increase.bind(this));
}

Counter.prototype.updateCount = function(newValue) {
    this.count = newValue;
    this.value.textContent = this.count;
};

Counter.prototype.decrease = function() {
    this.updateCount(this.count - 1);
};

Counter.prototype.reset = function() {
    this.updateCount(0);
};

Counter.prototype.increase = function() {
    this.updateCount(this.count + 1);
};

new Counter();
