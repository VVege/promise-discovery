enum VGPromiseState {
  pending,
  fulfilled = 0,
  rejected,
}
export class VGPromise<T> {
  then = (func: (value: T) => void) => {
    return new VGPromise<T>(re)
  };
  catch = (err: unknown) => {};
  private _state = VGPromiseState.pending;
  private _resolve: ((value: T) => void) | undefined;
  private _reject: ((err: unknown) => void) | undefined;

  constructor(ddd: (resolve: (value: T) => void, reject: (err: unknown) => void) => void) {

    this._state = VGPromiseState.pending;
    this._resolve = (value) => {
      this._state = VGPromiseState.fulfilled;
    };

    this._reject = (err: unknown) => {
      this._state = VGPromiseState.rejected;
    };
    ddd(this._resolve, this._reject);
  }
}

const vgP = new VGPromise<number>((resolve, reject) => {
  for (let index = 0; index < 1000; index++) {
    console.log(index);
  }
  resolve(10);
}).then((value: number) => {
  return value + 100;
}).then((value: number) => {
  return value + 200;
});

new Promise<void>((resolve, reject) => {
  
})
