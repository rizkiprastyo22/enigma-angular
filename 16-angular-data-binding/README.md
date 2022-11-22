# Data Binding

# string interpolation (one way dari ts ke html)
- syntax di ts: const expression = 'halo'
- syntax di html: {{ expression }}

# event (one way dari html ke ts)
- syntax di html: (target)="statement"	

# two-way

# data binding tidak bisa assigning, hanya bisa expression
- {{ 10 + 10 }} tampilnya 20
- {{ name='pluto' }} ini error karena gabisa assigning

# jika mau binding object gabisa secara literal
- {{ object }} -> ini ga error tapi datanya ga tampil
- {{ object.key }} -> baru bisa

# property binding dipakai jika melempar data beda component

[src]="instructor.img"

# attribute binding dipakai untuk definisi attribute tanpa perlu ambil dari data source
- contoh:
```
[attr.data-bs-target]="'#collapse'+i"
```

- itu dipake ketika kita pakai ngFor
```
    <div class="accordion-item" *ngFor="let item of faq; index as i">
        <h2 class="accordion-header" id="heading{{i}}">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            [attr.data-bs-target]="'#collapse'+i"
          >
            {{ item.question }}
          </button>
        </h2>
        <div
          id="collapse{{i}}"
          class="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p>
              {{ item.answer }}
            </p>
          </div>
        </div>
    </div>
```

- pake index as i

# ngStyle ini bisa dipake kalo stylingnya dikombinasikan dengan ngIf (pengkondisian)

# bisa juga di ngStyle langsung, seperti ini:
datanya
```
participants: string[] = ['bulan', 'bintang', 'matahari']
```

di html
```
<div *ngFor="let participant of participants; index as i">
    <span [ngStyle]="{'color': i % 2 == 0 ? 'blue' 'grey'}">
        {{ participant }}
    </span>
</div>
```