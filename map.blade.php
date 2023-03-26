@if ($map->image)
<section class="map-section">
  
  <x-image
    class="map-image-small"
    :source="[
      0 => $map->image_mobile,
      640 => $map->image
    ]"
    sizes="original"/>

  <x-image
      class="map-image-large"
      :source="$map->image"
      sizes="original"/>


  @if ($map->locations)

    <div class="locations">

      @foreach(collect($map->locations) as $key => $location)

      {{-- Tooltip Locations --}}

        <button data-location-key="{{ $key }}" class="location mobile" style="left: {{ $location->x_position_mobile }}%; top: {{ $location->y_position_mobile }}%;"></button>
        <button data-location-key="{{ $key }}" class="location desktop" style="left: {{ $location->x_position }}%; top: {{ $location->y_position }}%;"></button>

        {{-- Tooltip Infobox --}}

        <div data-location-key="{{ $key }}" class="tooltip">
          <div class="tooltip-heading">
            <x-image
                  :source="$location->icon"
                  sizes="original"/>
            <span class="tooltip-title">{!! $location->title !!}</span>
          </div>
          <span class="tooltip-intro" >{!! $location->text !!}</span>
        </div>

      @endforeach

      {{-- Display of the Tippy tooltips --}}

      <div class="container tooltip-container"></div>

    </div>

  @endif

</section>
@endif