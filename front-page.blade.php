@extends('layouts.app')

@section('content')

  {{-- Hero --}}
  <section class="home-hero-section">

      <video autoplay muted loop playsinline poster="{{ $hero->video_poster ? $hero->video_poster->sizes->hero_1920 : '' }}">

        @if ($hero->video_webm)
          <source src="{{ $hero->video_webm->url }}" type="video/webm">
        @endif

        @if ($hero->video_mp4)
          <source src="{{ $hero->video_mp4->url }}" type="video/mp4">
        @endif

      </video>

      <div class="container">

        <h1>{!! $hero->title !!}</h1>
        <div class="intro">{!! $hero->intro !!}</div>

      </div>

  </section>


{{--Logos--}}
@include('modules.sections.logos')

{{--Intro--}}
<section class="home-intro-section">
  
  <div class="container">

    <div class="intro">{!! $intro->text !!}</div>
    
  </div>

</section>

{{--Process--}}
<section class="home-process-section">

  <div class="container">
    <h2>{!! $process->title !!}</h2>

    @if ($process->steps)

      <div class="image">
      @foreach(collect($process->steps) as $key => $step)

        <x-image
            :source="$step->image"
            sizes="original"
            data-key="{{ $key }}"/>

      @endforeach
      </div>

      <div class="steps">
      @foreach(collect($process->steps) as $key => $step)
        <div class="step">
          <x-image
              :source="$step->icon"
              sizes="original"/>
          <span>{!! $step->title !!}</span>
          <span>{!! $step->subtitle !!}</span>
        </div>
      @endforeach
      </div>

    @endif

  </div>

</section>


{{--Badges--}}
@include('modules.sections.badges')

{{-- About --}}
<section class="home-about-section">

  <div class="container">

    <div class="intro">{!! $about->intro !!}</div>
    <div class="text">{!! $about->text !!}</div>
    <x-button :link="$about->button"/>

  </div>

</section>


{{-- Map --}}
@include('modules.sections.map')

{{-- CTA --}}
@include('modules.sections.cta')


@endsection
