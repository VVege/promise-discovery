export class VGPromise {

    private _resolve: (() => void) | undefined;
    private _reject: (() => void) | undefined;
  constructor(ddd: (resolve: () => void, reject: () => void) => void) {
    this._resolve = ddd.arguments.resolve;
    this._reject = ddd.arguments.reject;
    ddd()
  }
}

const vgP = new VGPromise((resolve, reject) => {
  for (let index = 0; index < 1000; index++) {
    console.log(index);
  }
  resolve();
});


