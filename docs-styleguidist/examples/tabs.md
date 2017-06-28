Responsive horizontal navigation tabs, switch between contents with ease
```
let activeTab = 0;

<section>
    <button class="button" @click="activeTab = 1">Set Music</button>
    <b-tabs v-model="activeTab">
        <b-tab-item label="Pictures">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque vestibulum dui vel molestie egestas.
            Nulla vulputate elementum diam quis consectetur.
        </b-tab-item>

        <b-tab-item label="Music">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque vestibulum dui vel molestie egestas.
            Nulla vulputate elementum diam quis consectetur.
            Integer pulvinar laoreet nibh non faucibus.
            Suspendisse ut cursus lectus. Donec consectetur turpis at leo ultricies rhoncus.
            Cras consequat aliquet eros nec porta.
            Nullam sit amet mollis turpis.
            Aenean vitae tortor et velit sodales faucibus.
        </b-tab-item>

        <b-tab-item label="Videos">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque vestibulum dui vel molestie egestas.
            Nulla vulputate elementum diam quis consectetur.
            Integer pulvinar laoreet nibh non faucibus.
        </b-tab-item>
    </b-tabs>
</section>
```
### Position
```
<section>
    <b-tabs position="is-centered" class="block">
        <b-tab-item label="Pictures"></b-tab-item>
        <b-tab-item label="Music"></b-tab-item>
        <b-tab-item label="Videos"></b-tab-item>
    </b-tabs>

    <b-tabs position="is-right" class="block">
        <b-tab-item label="Pictures"></b-tab-item>
        <b-tab-item label="Music"></b-tab-item>
        <b-tab-item label="Videos"></b-tab-item>
    </b-tabs>
</section>
```
### Icons
```
<section>
    <b-tabs>
        <b-tab-item label="Pictures" icon="photo_library"></b-tab-item>
        <b-tab-item label="Music" icon="library_music"></b-tab-item>
        <b-tab-item label="Videos" icon="video_library"></b-tab-item>
    </b-tabs>
</section>
```
### Sizes
```
<section>
    <b-tabs size="is-small" class="block">
        <b-tab-item label="Pictures" icon="photo_library"></b-tab-item>
        <b-tab-item label="Music" icon="library_music"></b-tab-item>
        <b-tab-item label="Videos" icon="video_library"></b-tab-item>
    </b-tabs>

    <b-tabs size="is-medium" class="block">
        <b-tab-item label="Pictures" icon="photo_library"></b-tab-item>
        <b-tab-item label="Music" icon="library_music"></b-tab-item>
        <b-tab-item label="Videos" icon="video_library"></b-tab-item>
    </b-tabs>

    <b-tabs size="is-large" class="block">
        <b-tab-item label="Pictures" icon="photo_library"></b-tab-item>
        <b-tab-item label="Music" icon="library_music"></b-tab-item>
        <b-tab-item label="Videos" icon="video_library"></b-tab-item>
    </b-tabs>
</section>
```
### Types
If you want a more classic style with borders
```
<section>
    <b-tabs type="is-boxed">
        <b-tab-item label="Pictures" icon="photo_library"></b-tab-item>
        <b-tab-item label="Music" icon="library_music"></b-tab-item>
        <b-tab-item label="Videos" icon="video_library"></b-tab-item>
    </b-tabs>
</section>
```
Or like Radio Buttons
```
<section>
    <b-tabs type="is-toggle">
        <b-tab-item label="Pictures" icon="photo_library"></b-tab-item>
        <b-tab-item label="Music" icon="library_music"></b-tab-item>
        <b-tab-item label="Videos" icon="video_library"></b-tab-item>
    </b-tabs>
</section>
```
### Expanded
```
<section>
    <b-tabs type="is-toggle" expanded>
        <b-tab-item label="Pictures" icon="photo_library"></b-tab-item>
        <b-tab-item label="Music" icon="library_music"></b-tab-item>
        <b-tab-item label="Videos" icon="video_library"></b-tab-item>
    </b-tabs>
</section>
```
